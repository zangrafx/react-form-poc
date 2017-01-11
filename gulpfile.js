var gg = require("gore-gulp");
var gulp = require("gulp");

gg({
    "baseDir": __dirname,
    "productionDevtool": "none",
    "developmentDevtool": "source-map"
}).setup(gulp);

gulp.task("build", ["webpack.development"]);


gulp.task("deploy", ["webpack.production"]);

gulp.task("default", ["build"]);
