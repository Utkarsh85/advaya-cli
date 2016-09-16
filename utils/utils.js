var pathExists = require('path-exists');
var beautify = require('js-beautify').js_beautify;

module.exports= {
	pathExist: function (query) {
		if(pathExists.sync(query))
			return true;
		else
			return false;
	},
	beautify: function (data) {
		return beautify(data, { indent_size: 4 });
	},
	capitalize: function (str)
	{
	    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1)});
	}
}