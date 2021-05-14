<?php
  $src    = 'bulba.png';
  $name   = basename($src, '.png');
  $im     = imagecreatefrompng($src);
  $size   = getimagesize($src);
  $width  = $size[0];
  $height = $size[1];

  $colors = [];
  $letters = "abcdefghijklmnopqrstuvwxyz";
  ob_start();
    for($y=0;$y<$height;$y++){
      $line = '';
      for($x=0;$x<$width;$x++)
        {
            $rgb = imagecolorat($im, $x, $y);
            $r = ($rgb >> 16) & 0xFF;
            $g = ($rgb >> 8) & 0xFF;
            $b = $rgb & 0xFF;
            $hex = str_pad(dechex($r), 2, '0', STR_PAD_LEFT).str_pad(dechex($g), 2, '0', STR_PAD_LEFT).str_pad(dechex($b), 2, '0', STR_PAD_LEFT);

            if (!isset($colors[$hex])) {
              $colors[$hex] = $letters[count($colors) ];
            }

            $line .= $colors[$hex] . ' ';

        }
        print "($line)\n";
      } 
      
      print "$name\n";
      $colors = array_combine($colors, array_keys($colors));
      foreach ($colors as $key => $value) {
        $output = "'" . $key . "': " . "'#" . $value . "',\n";
        print $output;
      }

