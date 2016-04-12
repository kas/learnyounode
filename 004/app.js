// MY FIRST ASYNC I/O!

var fs = require('fs');

function collect(err, data) {
	fileStringArray = data.toString().split("\n");
	newLines=0;

	fileStringArray.forEach(function(currentValue) {
		newLines+=1;
	});

	newLines-=1;

	console.log(newLines);
}

var fileString = fs.readFile(process.argv[2], collect);