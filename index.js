'use strict';

const Cryptr = require('cryptr');
const crypto = new Cryptr('hardcoded_key32');

let credentials = { username: '', password: '' };

//Example Data
credentials.password = crypto.encrypt(42425);
credentials.username = 'sggalvin';

// console.log(credentials);

function login(credentials, location) {
	//Verify location
	let countryCode = credentials.username.slice(0, 2);
	if (countryCode != location) {
		console.log('This location is invalid');
		throw 'Invalid Location';
	}

	let pass = crypto.decrypt(credentials.password);
	// console.log(pass);
}

login(credentials, 'sg');
