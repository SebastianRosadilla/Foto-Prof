var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')({ pattern: '*' });

/**
 * Definitions for source and destination paths.
 */
var FILES = {
  SRC: {
    JS: ['src/**/js/**/*.js', 'src/**/js/*.js'],
    SCSS: ['src/**/scss/*.scss', 'src/**/scss/**/*.scss'],
    HTML: ['src/**/templates/*.html', 'src/index.html'],
    BOWER: ['bower_components/**/*.*'],
    IMG: ['img/*.*']
  },
  DEST: {
    JS: 'build/js/',
    CSS: 'build/css/',
    HTML: 'build/',
    BOWER: 'build/js/libs/',
    IMG: 'build/img/'
  }
};

/**
 * Initialize the server.
 */
gulp.task('watch', ['js', 'scss', 'html'], function () {
  plugins.browserSync({
    server: { baseDir: 'build' },
    files: [
      FILES.DEST.JS,
      FILES.DEST.CSS,
      FILES.DEST.HTML
    ]
  });

  gulp.watch(FILES.SRC.JS, ['build']);
  gulp.watch(FILES.SRC.SCSS, ['build']);
  gulp.watch(FILES.SRC.HTML, ['build']);
});

/**
* Compile prints
*/
gulp.task('html', function () {
  gulp
    .src(FILES.SRC.IMG)
    .pipe(gulp.dest(FILES.DEST.IMG));
});

/**
 * Compile html files.
 */
gulp.task('img', function () {
  gulp
    .src(FILES.SRC.HTML)
    .pipe(gulp.dest(FILES.DEST.HTML));
});

/**
 * Compile ECMAScript 6 files.
 */
gulp.task('js', function () {
  gulp
    .src(FILES.SRC.JS)
    .pipe(plugins.concat('app.js'))
    .pipe(gulp.dest(FILES.DEST.JS));
});

/**
 * Compile SCSS files.
 */
gulp.task('scss', function () {
  gulp
    .src(FILES.SRC.SCSS)
    .pipe(plugins.sass())
    .pipe(plugins.concat('app.css'))
    .pipe(gulp.dest(FILES.DEST.CSS));
});

gulp.task('bower', function () {
  gulp
    .src(FILES.SRC.BOWER)
    .pipe(gulp.dest(FILES.DEST.BOWER));
})

// Build command
gulp.task('build', ['scss', 'html', 'js', 'bower','img']);
