var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var cache = require('gulp-cache');

// watch files for changes and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
   	notify: false
  });

  gulp.watch(['**/*.html', '*.htm', '**/*.css', '**/*.js'], {cwd: 'app'}, reload);
});

gulp.task('clear', function (done) {
  return cache.clearAll(done);
});

gulp.task('default', ['serve']);