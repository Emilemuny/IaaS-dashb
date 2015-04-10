#!/bin/bash

# delete temporary files
rm -rf node_modules public

# installing npm production
npm install async bcrypt request lodash good good-console hapi joi mongoose hapi-auth-cookie babel --save

# installing npm develpment
npm install bower gulp gulp-copy gulp-jade gulp-less gulp-jshint gulp-watch gulp-babel gulp-sourcemaps gulp-concat jshint-stylish lab chai --save-dev

# installing bower production
bower install angular angular-messages angular-ui-router jquery lodash moment bootstrap font-awesome --save

# build public directory
gulp build
