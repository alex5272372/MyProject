const gulp = require("gulp");
const sass = require("gulp-sass");

function style() {
    return (
        gulp
            .src("./JSA01/scss/*.scss")
            .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
            .on("error", sass.logError)
            .pipe(gulp.dest("JSA01/css"))
    );
}

function watch(){
    gulp.watch('./JSA01/scss/*.scss', style)
}
exports.style = style;
exports.watch = watch;