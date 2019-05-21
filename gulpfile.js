/* javascript: simple gulpfile that parses all .CSV files in a folder into Message Stream,
then composes them right back into CSV files again and save with
changed names */

var gulp = require('gulp')
var rename = require('gulp-rename')
var tapCsv = require('gulp-etl-tap-csv').tapCsv
var targetCsv = require('gulp-etl-target-csv').targetCsv

exports.default = function() {
    return gulp.src(['data/*.csv', '!data/*-parsed.csv'])
    .on('data', function (file) {
        console.log('JAVASCRIPT: Starting processing on ' + file.basename)
    })  
    .pipe(tapCsv({ columns:true }))
    .pipe(rename({ extname: ".ndjson" })) // rename to *.ndjson
    .on('data', function (file) {
        console.log('Done parsing ' + file.basename)
    })  
    .pipe(targetCsv({header:true}))
    .pipe(rename({ suffix:"-parsed", extname: ".csv" })) // rename to *.ndjson
    .on('data', function (file) {
        console.log('Done processing on ' + file.basename)
    })  
    .pipe(gulp.dest('data/'));
}