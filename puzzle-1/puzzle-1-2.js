const fs = require('fs');
const path = require('path');

function getSumOfBiggestGroups(groups, numberOfGroups) {
	const groupTotals = groups.map((group) =>
		group.split('\n').reduce((total, item) => total + Number(item), 0)
	);

	groupTotals.sort((a, b) => a - b);

	const biggestGroupsTotals = groupTotals.slice(-numberOfGroups);

	return biggestGroupsTotals.reduce((total, item) => total + Number(item), 0);
}

const data = fs
	.readFileSync(path.resolve(__dirname, './puzzle-1-input.txt'), {
		encoding: 'utf8',
		flag: 'r',
	})
	.split('\n\n');

console.log(
	`The 3 biggest groups sum a total of: ${getSumOfBiggestGroups(data, 3)}`
);
