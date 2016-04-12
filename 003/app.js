// MY FIRST I/O!

var fs = require('fs');


var fileString = fs.readFileSync(process.argv[2]).toString();
var fileStringArray = fileString.split("\n");

newLines=0;

fileStringArray.forEach(function(currentValue) {
	newLines+=1;
});

newLines-=1;

console.log(newLines);