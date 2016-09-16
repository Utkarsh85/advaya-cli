var fs = require('fs');
var utils= require('../../utils/utils');

module.exports=function (folderName) {
	var appJs="var advayaConfig= require(\'.\/advaya.config.js\');\r\n\r\nmodule.exports=function () {\r\n\tvar models= require(advayaConfig.modelController)().models;\r\n\tvar validation = require(advayaConfig.validation);\r\n\tvar database= require(advayaConfig.database)(models,validation);\r\n\treturn database.api;\r\n}";

	fs.writeFile(folderName+"/getApi.js",utils.beautify(appJs), function(err) {
	    if(err) {
	        return console.log(err);
	    }
	});
}
