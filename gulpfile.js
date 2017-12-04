var gulp 	= require('gulp')
, sass 		= require('gulp-sass')
, rename 	= require('gulp-rename');



var scssFiles = './css/main.scss';
var cssDest = './css';

var sassDevOptions = {
	outputStyle: 'expanded'
}
var sassProdOptions = {
	outputStyle: 'compressed'
}



gulp.task('sassdev', function() {
	return gulp.src(scssFiles)
	.pipe(sass(sassDevOptions).on('error', sass.logError))
	.pipe(gulp.dest(cssDest));
});

gulp.task('sassprod', function() {
	return gulp.src(scssFiles)
	.pipe(sass(sassProdOptions).on('error', sass.logError))
	.pipe(rename('main.min.css'))
	.pipe(gulp.dest(cssDest));
});

gulp.task('watch', function() {
	gulp.watch('./css/sass/*', ['sassdev', 'sassprod']);
});

gulp.task('default', ['sassdev', 'sassprod', 'watch']);

