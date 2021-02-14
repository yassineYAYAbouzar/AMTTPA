var gulp = require('gulp'),
    sass = require('gulp-sass'),
    soursemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer');
//html
gulp.task('html' , function(){
    return gulp.src('stage/index.html')
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('prodaction'))
});
//php
gulp.task('php' , function(){
    return gulp.src('stage/php/main.php')
    .pipe(gulp.dest('dist/php'))
    .pipe(gulp.dest('prodaction/php'))
});
//assets
gulp.task('assets' , function(){
    return gulp.src('stage/assets/*')
    .pipe(gulp.dest('dist/assets/'))
    .pipe(gulp.dest('prodaction/assets/'))
});
//lbscss
gulp.task('lbscss' , function(){
    return gulp.src(['stage/css/font-awesome.min.css','stage/css/normalize.css'])
    .pipe(gulp.dest('dist/css'))
    .pipe(gulp.dest('prodaction/css'))
});
//fonts
gulp.task('fonts' , function(){
    return gulp.src('stage/fonts/*')
    .pipe(gulp.dest('dist/fonts'))
    .pipe(gulp.dest('prodaction/fonts'))
});
//js
gulp.task('js' , function(){
    return gulp.src('stage/js/master.js')
    .pipe(gulp.dest('dist/js'))
    .pipe(gulp.dest('prodaction/js'))
});
//css
gulp.task('css' , function (){
    return gulp.src('stage/css/style.scss')
    .pipe(soursemaps.init())
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(soursemaps.write('.'))
    .pipe(gulp.dest('dist/css'))
    .pipe(gulp.dest('prodaction/css'))
});
