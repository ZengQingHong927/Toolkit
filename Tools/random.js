const randBase = Math.random(5).toString(10);
const crypto = require('crypto');

const rand = Math.random().toString(16).slice(2);
console.log(rand);

function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
var rString = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
console.log(rString);

function randomString(length) {
    return crypto.randomBytes(length).toString('hex');
}

var rs = randomString(4);
console.log(rs)