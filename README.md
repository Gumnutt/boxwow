# Boxwow
Like a pen. Like some pixels. Like a thingr. Maybe the greatest thingr ever. Also sass maps.

# How to use:
## Base command
`php boxwow ify`
## Arguments
| Command  | Description                                                                                            | Optional |
|----------|--------------------------------------------------------------------------------------------------------|----------|
| source   | Path to your image                                                                                     |          |
| dest     | Output directory or file, will output to subdirectory /boxwow                                          |     ✔    |
| label    | A label to use for the file name and css class (defaults to the name of the input file minus extension |     ✔    |
| maxsize  | The maximum width/height.                                                                              |     ✔    |
| template | An output template to print to if it exists.                                                           |     ✔    |

`php boxwow ify {path/to/image.jpg} {path/to/destination/directory} --maxsize 200 --label label_name --template src/assets/template-single-file.php `
## Things to do

- [ ] Optimise Sass loop to skip transparent boxes
- [x] ~~Update image scanner to output the box-shadow in css ready format~~
- [ ] Evaluate using CSS vars as colors and sizes eg. ```box-shadow: 1em 1em a, 1em 2em a;```
- [ ] Update gulp to use [brotli](https://www.npmjs.com/package/gulp-brotli)
- [ ] Compile separate stylesheets for each image
- [x] ~~look to see if php can take any of the computing load from gulp~~
