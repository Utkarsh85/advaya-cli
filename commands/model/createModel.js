var fs = require('fs');
var utils= require('../../utils/utils');

module.exports=function (modelName) {
	if(!utils.pathExist('./api/models'))
	{
		throw 'Error: Not a Advaya project; Make sure you are in the Advaya project root folder';
	}

	modelName= utils.capitalize(modelName);

	if(utils.pathExist('./api/models/'+modelName+'.js'))
	{
		var err='Error: model '+modelName+' already exists';
		throw err;
	}

	var modelJs ='/*\n* Model : '+modelName+'\n* Description : Your models description here\n*/ \nmodule.exports = { schema: { properties: { }},\n//unique:[\'attributeName\'],\n//safeAttributes: [\'attributeName\']\n//embeded:\'modelName\' \n//reference: {}\n};';

	fs.writeFile('./api/models/'+modelName+'.js',utils.beautify(modelJs), function(err) {
	    if(err) {
	        return console.log(err);
	    }
	});
}