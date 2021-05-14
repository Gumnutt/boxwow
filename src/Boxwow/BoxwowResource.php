<?php

namespace Boxwow;

use mysql_xdevapi\Exception;

class BoxwowResource {

  const VARNAME_CHAR_LIST = __DIR__ . '/../assets/emoji.txt';

  private $varnameIndex = 0;

  private $varnameDictionary = '';

  private $sourceFile = '';

  private $destDir = '';

  private $maxSize = 512;

  private $sourceDownscaledFile = '';

  public $pixelMap = [];

  public $colorStats = [];

  # __DIR__ is the location of this file.
  # getcwd() is the repo/app root.

  /**
   *
   */
  public function __construct($source, $maxSize = 0) {
    $this->varnameDictionary = file_get_contents(self::VARNAME_CHAR_LIST);

    if (!file_exists($source)) {
      throw new \Exception('File ' . $source . ' doesn\'t exist? This class doesn\'t support directories');
    }

    if ($maxSize) {
      $this->maxSize = $maxSize;
    }
    else {
      $size   = getimagesize($this->sourceFile);
      $width  = $size[0];
      $height = $size[1];
      $this->maxSize = max($width, $height);
    }

    $this->sourceFile = $source;
  }

  public function processColors() {
    $image = $this->sourceToPng();

    $width  = imagesx($image);
    $height = imagesy($image);

    for ($y = 1; $y < $height; $y++) {
      $this->pixelMap[$y] = [];
      for ($x = 1; $x < $width; $x++) {
        $this->pixelMap[$y][$x] = [];
        $hex = $this::imageHexAt($image, $x, $y);
        if (!$hex) {
          throw new \Exception("Hex value not found, something went screwy");
        }

        if (!isset($this->colorStats[$hex])) {
          $this->colorStats[$hex] = 1;
        }
        else {
          $this->colorStats[$hex]++;
        }

        $this->pixelMap[$y][$x] = $hex;
      }
    }
  }

  /**
   * Get a new unique varname.
   *
   * @return string
   */
  private function nextVarName() {
    if ($this->varnameIndex >= strlen($this->varnameDictionary)) {
      throw new \Exception("We ran out of characters to make varnames and we're too stupid to create double character varnames, but if we did we could create " . strlen($this->varnameDictionary) * strlen($this->varnameDictionary) . " varnames, how cool");
    }
    $name = $this->varnameDictionary[$this->varnameIndex];
    $this->varnameIndex++;
    return $name;
  }

  /**
   * Get a hex value for an image at a specific x/y coordinate. Assumes x/y are not bigger than the image yo.
   */
  public static function imageHexAt($imageResource, $xCoord, $yCoord) {
    $rgb = imagecolorat($imageResource, $xCoord, $yCoord);
    $r = ($rgb >> 16) & 0xFF;
    $g = ($rgb >> 8) & 0xFF;
    $b = $rgb & 0xFF;
    $hex = str_pad(dechex($r), 2, '0', STR_PAD_LEFT)
         . str_pad(dechex($g), 2, '0', STR_PAD_LEFT)
         . str_pad(dechex($b), 2, '0', STR_PAD_LEFT);
    return $hex;
  }

  public function toBoxShadow() {
    $omit = $this->defaultColor();

    $output = [];
    foreach ($this->pixelMap as $y => $row) {
      $row_of_shadows = [];
      foreach ($this->pixelMap[$y] as $x => $hex) {
        // if ($hex != $omit) {
          $row_of_shadows [] = "{$x}em {$y}em #{$hex}";
        // }
      }
      $output[] = implode(',', $row_of_shadows );
    }

    return implode(',', $output);
  }

  public function countColors() {
    return count($this->countColors());
  }

  public function defaultColor() {
    $top_colors = array_keys($this->colorStats, max($this->colorStats));
    return $top_colors[0];
  }

  public function generateFromPhpTemplate($template, $destDir, $label = FALSE) {

    if (!$label) {
      $path_parts = pathinfo($source);
      $label = $path_parts['filename'];
    }
    $boxshadow = $this->toBoxShadow();

    ob_start();
    include($template);
    $rendered = ob_get_contents();
    ob_end_clean();
    file_put_contents($destDir . '/' . $label . '.html', $rendered);
    return $destDir . '/' . $label . '.html';
  }

  public function sourceToPng() {
    list($width_orig, $height_orig, $type) = getimagesize($this->sourceFile);

    // Get the aspect ratio
    $ratio_orig = $width_orig / $height_orig;

    $width  = $this->maxSize;
    $height = $this->maxSize;

    // resize to height (orig is portrait)
    if ($ratio_orig < 1) {
        $width = $height * $ratio_orig;
    }
    // resize to width (orig is landscape)
    else {
        $height = $width / $ratio_orig;
    }

    switch ($type) {
      case IMAGETYPE_GIF:
        $image = imagecreatefromgif($this->sourceFile);
        break;
      case IMAGETYPE_JPEG:
        $image = imagecreatefromjpeg($this->sourceFile);
        break;
      case IMAGETYPE_PNG:
        $image = imagecreatefrompng($this->sourceFile);
        break;
      default:
        throw new \Exception('Unrecognized image type ' . $type);
    }

    // create a new blank image
    $newImage = imagecreatetruecolor($width, $height);

    // Copy the old image to the new image
    imagecopyresampled($newImage, $image, 0, 0, 0, 0, $width, $height, $width_orig, $height_orig);

    return $newImage;
  }

}

// class BoxwowIterator{
//   private $source_dirctory = '';

//   public function iterator() {

//   }
// }
