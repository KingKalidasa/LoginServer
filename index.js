'use strict';

const fs = require('fs');
// const Cryptr = require('cryptr');
const { json } = require('express');
// const crypto = new Cryptr('hardcoded_key32');

let credentials = { username: '', password: '' };

//Example Data
credentials.password =
	'a32217f33fd78c7c831db0ef4aae9c393b8cf0cd368b77c711dba074147733770d393564ad606694660d3663758fe4cdbe01ee756272450d582b4cd50015a61794a3d4be8fd9b10bc046b635273b437adce907600d23d85deb96267f47bd3648c66c8f7252';
credentials.username = 'sggalvin';

// console.log(credentials);
function load_database(input_name) {
	let data = fs.readFileSync(input_name, { encoding: 'utf8', flag: 'r' });
	let parsed_data = JSON.parse(data);
	return parsed_data;
}
let password_db = load_database('secret passwords.txt');

function login(credentials, location) {
	//Verify location
	let countryCode = credentials.username.slice(0, 2);
	if (countryCode != location) {
		console.log('This location is invalid');
		throw 'Invalid Location';
	}

	// let pass = crypto.encrypt(credentials.password); //TODO: use correct encryption scheme
	let result = false;
	// iterate over Database
	const keys = Object.keys(password_db);
	keys.forEach((key, index) => {
		// console.log(`${password_db[key]}`);
		if (password_db[key] == credentials.password) {
			console.log('found user');
			result = true;
		}
	});
	// console.log(result);
	return result;
}

let action = login(credentials, 'sg');
console.log(action);
