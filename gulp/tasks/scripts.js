var gulp = require('gulp'),
webapck = require('webpack');

gulp.task('scripts', function(callback) {
	webpack(require('../../webapck.config.js'), function() {
		console.log("Hooray, webapck completed!");
		callback();
	})
})