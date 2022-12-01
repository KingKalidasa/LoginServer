const fs = require('fs');
const Cryptr = require('cryptr');
const crypto = new Cryptr('hardcoded_key32');

let pass1 = crypto.encrypt('welfj');
let pass2 = crypto.encrypt(42454);
let pass3 = crypto.encrypt('hunter2');

let items = {
	'usharold:': pass1,
	'sggalvin:': pass2,
	'dewendy:': pass3
};
console.log(items);
jsonItems = JSON.stringify(items);

fs.writeFile(
	'secret passwords.txt',
	jsonItems,
	{
		encoding: 'utf8',
		flag: 'w',
		mode: 0o666
	},
	(err) => {
		if (err) console.log(err);
		else {
			console.log('File written successfully');
			// console.log(fs.readFileSync('secret passwords.txt', 'utf8'));
		}
	}
);
