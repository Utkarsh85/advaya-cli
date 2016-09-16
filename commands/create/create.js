var checkAndCreateFolder= require('./checkAndCreateFolder');
var createRequiredFolders= require('./createRequiredFolders');
var createPackageJson= require('./createPackageJson');
var createAppJs= require('./createAppJs');
var createAdvayaConfig= require('./createAdvayaConfig');
var createGetApi= require('./createGetApi');
var createGetToken= require('./createGetToken');
var createConfigFiles= require('./createConfigFiles');

module.exports= function (program) {

	program
	.command('create <folderName>')
	.description('create a advaya project')
	.action(function(folderName){
		// console.log(folderName);
		checkAndCreateFolder(folderName);
		createRequiredFolders(folderName);
		createPackageJson(folderName);
		createAppJs(folderName);
		createAdvayaConfig(folderName);
		createGetApi(folderName);
		createGetToken(folderName);
		createConfigFiles(folderName);
	});

	return program;
}