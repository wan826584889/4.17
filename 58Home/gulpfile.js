var gulp = require('gulp');
var server = require('gulp-webserver');

gulp.task('server', function() {
    gulp.src('.')
        .pipe(server({
            port: '3000',
            open: true,
            livereload: true
        }))
})