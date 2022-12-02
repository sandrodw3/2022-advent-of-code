const fs = require('fs');
const path = require('path');

function getBiggestGroup(groups) {
	return Math.max(
		...groups.map((group) =>
			group.split('\n').reduce((total, item) => total + Number(item), 0)
		)
	);
}

const data = fs
	.readFileSync(path.resolve(__dirname, './puzzle-1-input.txt'), {
		encoding: 'utf8',
		flag: 'r',
	})
	.split('\n\n');

console.log(`The biggest group sums a total of: ${getBiggestGroup(data)}`);
