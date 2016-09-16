var fs = require('fs');
var utils= require('../../utils/utils');

module.exports=function (folderName) {
	var appJs="module.exports={\r\n\tmodelController: \'advaya-model-controller\',\r\n\tdatabase: \'advaya-mongo\',\r\n\ttoken: \'advaya-token\',\r\n\tvalidation: \'advaya-validation\',\r\n}";

	fs.writeFile(folderName+"/advaya.config.js",utils.beautify(appJs), function(err) {
	    if(err) {
	        return console.log(err);
	    }
	});
}
