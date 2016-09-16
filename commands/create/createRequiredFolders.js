var mkdir= require('mkdirp');
module.exports=function (folderName) {
	['api','config','upload'].map(function (name) {
		mkdir(folderName+'/'+name);
	});

	['models','controllers'].map(function (name) {
		mkdir(folderName+'/api/'+name);
	});
}