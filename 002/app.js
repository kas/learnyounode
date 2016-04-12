// BABY STEPS

var sum = 0;

process.argv.forEach((val, index, array) => {
	if (index > 1) {
		sum+=Number(val);
	}
});

console.log(sum);