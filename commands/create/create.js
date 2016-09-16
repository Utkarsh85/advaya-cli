var checkAndCreateFolder= require('./checkAndCreateFolder');
var createRequiredFolders= require('./createRequiredFolders');
var createPackageJson= require('./createPackageJson');
var createAppJs= require('./createAppJs');
var createConfigFiles= require('./createConfigFiles');

module.exports= function (program) {

	program
	.command('create <folderName>')
	.description('create a quail project')
	.action(function(folderName){
		// console.log(folderName);
		checkAndCreateFolder(folderName);
		createRequiredFolders(folderName);
		createPackageJson(folderName);
		createAppJs(folderName);
		createAdvayaConfig(folderName);
		createGetApi(folderName);
		createConfigFiles(folderName);
	});

	return program;
}