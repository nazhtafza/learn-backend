const coffee = require("./lib/coffee");
const user = require("./lib/user");
const http = require('http');

const firstName = process.argv[2];
const lastName = process.argv[3];

console.log(`Hello Mr. ${firstName} ${lastName}`);

// menjalankan coffee.js

console.log(coffee)

// menjalankan user.js
console.log(user)