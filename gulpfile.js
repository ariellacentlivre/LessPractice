var gulp = require("gulp"); 

gulp.task("copy", function(){
	return gulp.src("to_copy.txt")
		.pipe(gulp.dest("dev"));
});
// "copy" task makes a copy of "to_copy.txt" and saves it in "dev" folder

var less = require("gulp-less");

gulp.task("less", function(){
	gulp.src("*.less")
		.pipe(less())
		.pipe(gulp.dest("./css"));
});

gulp.task("automate", function(){
	gulp.watch("*.less",["less"]);
});