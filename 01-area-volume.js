function area() {
	return this.x * this.y;
}

function vol() {
	return this.x * this.y * this.z;
}

function main(area, vol, input) {
	let objectArray = JSON.parse(input);
	let outputArray = []; // storage for results
	for (coordinates of objectArray) {
		outputArray.push({
			area: area.call(coordinates),
			volume: vol.call(coordinates),
		});
	}
	return outputArray;
}

console.log(
	main(
		area,
		vol,
		`[     {"x":"1","y":"2","z":"10"},     {"x":"7","y":"7","z":"10"},     {"x":"5","y":"2","z":"10"}     ]`
	)
);

main(
	area,
	vol,
	`[     {"x":"10","y":"-22","z":"10"},     {"x":"47","y":"7","z":"-5"},     {"x":"55","y":"8","z":"0"},     {"x":"100","y":"100","z":"100"},     {"x":"55","y":"80","z":"250"}     ]`
);
