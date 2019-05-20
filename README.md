# gulp-etl-starter #

This starter project is a **gulp-etl** project that performs ETL tasks using [gulp](https://gulpjs.com/). You can debug in [VScode](https://code.visualstudio.com/download)
or run from the command line as a regular gulp task

### Usage
**gulp-etl** plugins accept a configObj as the first parameter; the configObj
will contain any info the plugin needs. For this plugin the configObj is the "Options" object for [csv-parse](https://csv.js.org/parse/), described [here](https://csv.js.org/parse/options/); the only difference is that the "columns" property cannot be falsey, since it would result in arrays being returned
for each row instead of objects. A falsey value for columns will be overridden to true.

### Quick Start
* Dependencies: 
    * [git](https://git-scm.com/downloads)
    * [nodejs](https://nodejs.org/en/download/releases/) - At least v6.3 (6.9 for Windows) required for TypeScript debugging
    * npm (installs with Node)
    * typescript - installed as a development dependency
* Clone this repo and run `npm install` to install npm packages
* Debug: with [VScode](https://code.visualstudio.com/download) use `Open Folder` to open the project folder, then hit F5 to debug. This runs without compiling to javascript using [ts-node](https://www.npmjs.com/package/ts-node)
* Test: `npm test` or `npm t`
* Compile TypeScript to javascript: `npm run build`
* Run javascript version: gulp --gulpfile gulpfile.js default
* Run TypeScript version: gulp --gulpfile gulpfile.ts processCsv


Note: This document is written in [Markdown](https://daringfireball.net/projects/markdown/). We like to use [Typora](https://typora.io/) and [Markdown Preview Plus](https://chrome.google.com/webstore/detail/markdown-preview-plus/febilkbfcbhebfnokafefeacimjdckgl?hl=en-US) for our Markdown work..
