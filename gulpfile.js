var gulp 	= require('gulp'),
watch 		= require('gulp-watch');

gulp.task('default', function(){
	console.log("Hooray - you created a Gulp task.");
});

gulp.task('html', function() {
	console.log("Something useful to your HTML has been performed - automatically.");
});

gulp.task('styles', function() {
	console.log("Something useful to your Styles.CSS has been performed - automatically.");
});

gulp.task('watch', function() {
	watch('./app/index.html', function() {
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('styles');
	})
});

