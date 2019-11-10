const _ = require('lodash');
const moment = require('moment-timezone');
const log4js = require('log4js');
const timeUS = moment().utcOffset(1200).format('YYYY-MM-DD HH:mm:ss');
const timeCN = moment().utcOffset(0).format('YYYY-MM-DD HH:mm:ss');
const timestamp = moment(Date.now()).format('YYYY-MM-DDTHH:mm:ss.SSS');

// UTC time GMT+00:00
const nowDate = new Date(timestamp);
console.log(`Date instance: ${nowDate}`);

// Date string, offset by months, UTC time GMT+08:00, local time
const day = moment().subtract(10, 'months').format('YYYY-MM-DDTHH:mm:ss.SSS');
console.log(`Moment 10 months offset: ${day}`)

// Date object UTC time GMT+00:00, 2019-10-13T02:28:51.425Z 2018-12-13T02:28:51.426Z
const startDate = new Date(day);
console.log(`Moment create Date instance: ${nowDate} ${startDate}`);

// Calculate days 304 days
console.log(`Spacing Days: ${Math.round(Math.abs(nowDate-startDate) / (24 * 60 * 60 * 1000))}`);

// Date substraction 86400000
console.log(`2 Date substraction (miliseconds): ${new Date('2019-10-13T10:20:30') - new Date('2019-10-12T10:20:30')}`);

// Local time 2019-10-13T10:28:51.430
console.log(`Moment instance: ${moment().format('YYYY-MM-DDTHH:mm:ss.SSS')}`);

// timezone
var newYork    = moment.tz(nowDate, "America/New_York");
var losAngeles = newYork.clone().tz("America/Los_Angeles");
var london     = newYork.clone().tz("Europe/London");
console.log(`Timezone NewYork: ${newYork.format('YYYY-MM-DDTHH:mm:ss.SSS')}`);
console.log(`Timezone LosAngeles: ${losAngeles.format('YYYY-MM-DDTHH:mm:ss.SSS')}`);
console.log(`Timezone London: ${london.format('YYYY-MM-DDTHH:mm:ss.SSS')}`);