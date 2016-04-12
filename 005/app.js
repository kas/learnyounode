// FILTERED LS

var fs = require('fs');
var path = require('path');

function callback(err, list) { // list is an array of filename strings
	list.forEach(function(currentFile) {
		if (path.extname(currentFile) == extensionFilter) {
			console.log(currentFile);
		}
	});
}
var extensionFilter = '';

if (process.argv[3] == '') {
	extensionFilter = '';
} else {
	extensionFilter = '.' + process.argv[3];
}

var dirString = fs.readdir(process.argv[2], callback);