var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var copySassFolders = [
	"node_modules/normalize-scss/sass/**/*.scss"
];
var copyJs = [
	"node_modules/jquery/dist/jquery.min.js"
];

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

	browserSync.init({
		server: "./app"
	});

	gulp.watch("app/scss/*.scss", ['sass']);
	gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
	return gulp.src("app/scss/*.scss")
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 3 versions']
		}))
		.pipe(gulp.dest("app/css"))
		.pipe(browserSync.stream());
});

// Copying sass from node_modules
gulp.task( 'copy-sass', function () {
	return gulp.src( copySassFolders )
		.pipe( gulp.dest( "app/scss" ) );
} );

// Copying js from node_modules
gulp.task( 'copy-js', function () {
	return gulp.src( copyJs )
		.pipe( gulp.dest( "app/js" ) );
} );

gulp.task('default', ['serve']);