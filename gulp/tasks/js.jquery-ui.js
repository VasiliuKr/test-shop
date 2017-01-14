'use strict';

module.exports = function() {
  $.gulp.task('js:jquery-ui', function() {
    return $.gulp.src($.path.jsJqueryUI)
      .pipe($.gp.concat('jquery-ui.min.js'))
      .pipe($.gulp.dest($.config.root + '/assets/js/plugins'))
  })
};
