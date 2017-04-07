var gulp = require('gulp');

var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var minify = require('gulp-minify-css');

var sourcemaps = require('gulp-sourcemaps');

gulp.task('clean', function() {
    return gulp.src('dist/*', { read: false })
        .pipe(clean());
});
gulp.task('lint', function() {
    gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
})

gulp.task('sass', function() {
    gulp.src('src/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css'))
        .pipe(rename('style.min.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'))

});

gulp.task('scripts', function() {
    gulp.src('src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));


    // gulp.src('src/dist/*.css')
    //     .pipe(concat('style.css'))
    //     .pipe(rename('main.min.css'))
    //     .pipe(uglify())
    //     .pipe(gulp.dest('dist'))

    console.log('gulp task is done.')
})

gulp.task('default', function() {
    gulp.run('clean', 'lint', 'sass', 'scripts');

    gulp.watch('./js/*.js', function() {
        gulp.run('lint', 'scripts');
    })
})
