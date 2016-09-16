var fs = require('fs');
var utils= require('../../utils/utils');

module.exports=function (controllerName) {
	if(!utils.pathExist('./api/controllers'))
	{
		throw 'Error: Not a Advaya project; Make sure you are in the Advaya project root folder';
	}

	controllerName= utils.capitalize(controllerName);

	if(utils.pathExist('./api/controllers/'+controllerName+'Controller.js'))
	{
		var err='Error: controller '+controllerName+' already exists';
		throw err;
	}

	// var controllerJs ='/*\n* Controller : '+controllerName+'\n* Description : Your controllers description here\n*/ \nmodule.exports = {};';
	var controllerJs="\/*\r\n * Controller : "+controllerName+"\r\n * Description : Your controllers description here\r\n *\/\r\n\r\nvar Api= require(require(\'path\').resolve(\'.\/getApi\'))();\r\n\r\nmodule.exports = {\r\n\t\r\n};";

	fs.writeFile('./api/controllers/'+controllerName+'Controller.js',utils.beautify(controllerJs), function(err) {
	    if(err) {
	        return console.log(err);
	    }
	});
}