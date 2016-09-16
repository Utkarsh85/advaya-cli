var mkdir= require('mkdirp');
var utils= require('../../utils/utils');
module.exports=function (folderName) {
	if(!utils.pathExist(folderName))
	{
		mkdir(folderName);
	}
	else
	{
		var err='Error: Folder '+folderName+' already exists';
		throw err;
	}
}