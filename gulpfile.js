var gulp = require('gulp');
var sass  = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

const path = {
    sass: './source/scss',
    css: './source/css'
};

const config = {
    sass: {
        outputStyle: 'compressed'
    }
};

gulp.task('sass', function() {
    return gulp.src(`${path.sass}/*.scss`)
        .pipe(sass(config.sass))
        .pipe(autoprefixer())
        .pipe(gulp.dest(path.css));
});

gulp.task('default', ['sass'], function() {
    console.log('watch...')
    gulp.watch('./source/scss/_partial/*.scss', ['sass']);
    gulp.watch('./source/scss/*.scss', ['sass']);
});
