var fs = require('fs');
var utils= require('../../utils/utils');

module.exports=function (folderName) {
	var appJs="var advayaConfig= require(\'.\/advaya.config.js\');\r\n\r\nvar models= require(advayaConfig.modelController)().models;\r\nvar controllers= require(advayaConfig.modelController)().controllers;\r\nvar validation = require(advayaConfig.validation);\r\nvar token = require(advayaConfig.token);\r\n\r\nvar app= require(\'advaya\')(models,controllers,token);\r\n\r\nvar database= require(advayaConfig.database)(models,validation);\r\n\r\nvar port = process.env.PORT || 3000;\r\ndatabase.connect(function (err) {\r\n\tapp.listen(port,function () {\r\n\t\tconsole.log(\'Running on port \'+port);\r\n\t    Api= database.api;\r\n\t});\r\n});";

	fs.writeFile(folderName+"/app.js",utils.beautify(appJs), function(err) {
	    if(err) {
	        return console.log(err);
	    }
	});
}
