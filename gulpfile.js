var gulp = require('gulp');
var jade = require('gulp-jade');
var less = require('gulp-less');
var lint = require('gulp-jshint');
var copy = require('gulp-copy');
var maps = require("gulp-sourcemaps");
var watch = require('gulp-watch');
var babel = require('gulp-babel');
var concat = require("gulp-concat");

var paths = {
  filesrc:  ['./client/**/*', './server/**/*', './test/**/*'],
  jadesrc:  ['./client/**/*.jade'],
  lesssrc:  ['./client/**/*.less'],
  lintsrc:  ['./client/**/*.js', './server/**/*.js', './test/**/*.js'],
  babelsrc: ['./client/**/*.js'],
  mediasrc: ['./client/**/*.mp3', './client/**/*.jpg', './client/**/*.wav', './client/**/*.png', './client/**/*.ico'],
  destination: './public'
};

gulp.task('build', ['jade', 'less', 'lint', 'babel', 'copy']);
gulp.task('default', ['build', 'watch']);

gulp.task('jade', function() {
  gulp.src(paths.jadesrc)
    .pipe(jade({pretty: true, doctype: 'html'}))
    .on('error', console.error.bind(console))
    .pipe(gulp.dest(paths.destination));
});

gulp.task('less', function() {
  gulp.src(paths.lesssrc)
    .pipe(less())
    .on('error', console.error.bind(console))
    .pipe(gulp.dest(paths.destination));
});

gulp.task('lint', function() {
  gulp.src(paths.lintsrc)
    .pipe(lint())
    .pipe(lint.reporter('jshint-stylish'));
});

gulp.task('babel', function() {
  gulp.src(paths.babelsrc)
    .pipe(maps.init())
    .pipe(concat("index.js"))
    .pipe(babel())
    .on('error', console.error.bind(console))
    .pipe(maps.write("."))
    .pipe(gulp.dest(paths.destination));
});

gulp.task('copy', function() {
  gulp.src(paths.mediasrc)
    .pipe(copy(paths.destination, {prefix:1}));
});

gulp.task('watch', function() {
  watch(paths.filesrc, function() {
    gulp.start('build');
  });
});
