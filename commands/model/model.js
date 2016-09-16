var createModel= require('./createModel');
module.exports= function (program) {

	program
	.command('add-model <modelName>')
	.alias('m')
	.description('create a advaya model')
	.action(function(modelName){
		createModel(modelName);
	});

	return program;
}