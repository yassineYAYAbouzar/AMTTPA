var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer');
//html
gulp.task('html' , function(){
    return gulp.src('stage/**.html')
    .pipe(gulp.dest('../AMTTPAdist/dist'))
    .pipe(gulp.dest('prodaction'))
});
//php
gulp.task('php' , function(){
    return gulp.src('stage/php/main.php')
    .pipe(gulp.dest('../AMTTPAdist/dist/php'))
    .pipe(gulp.dest('prodaction/php'))
});
//assets
gulp.task('assets' , function(){
    return gulp.src('stage/assets/*')
    .pipe(gulp.dest('../AMTTPAdist/dist/assets/'))
    .pipe(gulp.dest('prodaction/assets/'))
});
//lbscss
gulp.task('lbs' , function(){
    return gulp.src(['stage/css/font-awesome.min.css','stage/css/normalize.css'])
    .pipe(gulp.dest('../AMTTPAdist/dist/css'))
    .pipe(gulp.dest('prodaction/css'))
});
//fonts
gulp.task('fonts' , function(){
    return gulp.src('stage/fonts/*')
    .pipe(gulp.dest('../AMTTPAdist/dist/fonts'))
    .pipe(gulp.dest('prodaction/fonts'))
});
//js
gulp.task('js' , function(){
    return gulp.src('stage/js/master.js')
    .pipe(gulp.dest('../AMTTPAdist/dist/js'))
    .pipe(gulp.dest('prodaction/js'))
});
//css
gulp.task('css' , function (){
    return gulp.src(['stage/css/style.css'])
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('../AMTTPAdist/dist/css'))
    .pipe(gulp.dest('prodaction/css'))
});
//WATCH 

gulp.task('watch', function(){
    gulp.watch('stage/**.html', gulp.series(['html']));
    gulp.watch('stage/php/main.php', gulp.series(['php']));
    gulp.watch('stage/assets/*', gulp.series(['assets']));
    gulp.watch(['stage/css/font-awesome.min.css','stage/css/normalize.css'], gulp.series(['lbs']));
    gulp.watch('stage/fonts/*', gulp.series(['fonts']));
    gulp.watch('stage/js/master.js', gulp.series(['js']));
    gulp.watch('stage/css/style.css', gulp.series(['css']));
});