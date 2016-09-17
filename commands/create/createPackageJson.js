var fs = require('fs');

module.exports=function (folderName) {
	var packageObj={

		"name": folderName.toLowerCase(),
		"version": "1.0.0",
		"private": true,
		"description": "An awesome advaya project",
		"scripts": {
			"start": "node app.js",
			"debug": "node debug app.js"
		},
		"main": "app.js",
		"keywords": [
			"advaya"
		],
		"author": "anonymous",
		"license": "",
		"dependencies": {
			"advaya": "^1.0.0",
			"advaya-mongo": "^1.0.0",
			"advaya-model-controller": "^1.0.0",
			"advaya-token": "^1.0.0",
			"advaya-validation": "^1.0.0"
		}
	}

	fs.writeFile(folderName+"/package.json",JSON.stringify( packageObj, null, 2 ), function(err) {
	    if(err) {
	        return console.log(err);
	    }
	    // console.log("package.json created");
	});
}
