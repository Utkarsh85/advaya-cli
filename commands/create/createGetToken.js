var fs = require('fs');
var utils= require('../../utils/utils');

module.exports=function (folderName) {
	var appJs="var advayaConfig= require(\'.\/advaya.config.js\');\r\n\r\nmodule.exports=function () {\r\n\tvar token = require(advayaConfig.token);\r\n\treturn token;\r\n}";

	fs.writeFile(folderName+"/getToken.js",utils.beautify(appJs), function(err) {
	    if(err) {
	        return console.log(err);
	    }
	});
}
