/* TypeScript: parse all .CSV files in a folder into Message Stream,
then compose them right back into CSV files again and save with
changed names */

import { src, dest } from 'gulp'
import * as rename from 'gulp-rename'
import { tapCsv } from 'gulp-etl-tap-csv'
import { targetCsv } from 'gulp-etl-target-csv'
const errorHandler = require('gulp-error-handle'); // handle all errors in one handler, but still stop the stream if there are errors

export function processCsv(callback: any) {
    try {    
        return src(['data/*.csv', '!data/*-parsed.csv'])
        .pipe(errorHandler(function(err:any) {
            console.error('oops: ' + err)
            callback(err)
          }))        
        .on('data', function (file:any) {
            console.log('TypeScript: Starting processing on ' + file.basename)
        })  
        .pipe(tapCsv({ columns:true }))
        .pipe(rename({ extname: ".ndjson" })) // rename to *.ndjson
        .on('data', function (file:any) {
            console.log('Done parsing ' + file.basename)
        })  
        .pipe(targetCsv({header:true}))
        .pipe(rename({suffix:"-parsed", extname: ".csv" })) // rename to *.ndjson
        .on('data', function (file:any) {
            console.log('Done processing on ' + file.basename)
        })  
        .pipe(dest('data/'));
    }
    catch (err) {
        console.error(err)    
    }}