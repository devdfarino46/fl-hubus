const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const changed = require('gulp-changed');

module.exports = function optimize_images(done) {
    gulp.src(["src/assets/img/**/*.+(png|jpg|jpeg)"])
        .pipe(changed('dist/assets/img/', {
            extension: '.webp',
            hasChanged: changed.compareLastModifiedTime
        }))
        .pipe(imagemin([
            imagemin.mozjpeg({
                quality: 70,
                progressive: true
            }),
            imagemin.optipng({
                optimizationLevel: 5
            })
        ], {
            verbose: true
        }))
        .pipe(webp())
        .pipe(gulp.dest("dist/assets/img"));
        
    gulp.src("src/assets/img/**/*.+(svg|ico|gif)")
        .pipe(changed('dist/assets/img/', {
            hasChanged: changed.compareLastModifiedTime
        }))
        .pipe(imagemin([
            imagemin.svgo()
        ]))
        .pipe(gulp.dest("dist/assets/img"));

    done();
}