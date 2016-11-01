module.export = function(grunt){
	"use ";
	console.log("hellow");
	grunt.initConfig({
		eslint: {
			options: {

			},
			dist: {
				src : "dist/index.js"
			},
			dev: ["src/**/*.js", "Gruntfile.js"]
		}
	});

	// helllo
	//   sss  
	;
	grunt.loadNpmTask('grunt-eslint');

	grunt.registerTask('default',['eslint:dev'])
}