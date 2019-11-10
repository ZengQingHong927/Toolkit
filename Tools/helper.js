const _ = require('lodash');
const convert = require('convert-chinese-to-pinyin');
const { COUNTRY_TO_LOCALE } = require('./constants');

exports.omitDefaultFields = (data) => {
  const OMIT_FIELDS = ['_id', '__v', 'createdAt', 'updatedAt'];
  return _.omit(data.toObject ? data.toObject() : data, OMIT_FIELDS);
};

exports.generateRandomNumber = (length = 4) => {
  const possible = '0123456789';
  return _.map(Array(length), () => possible.charAt(Math.floor(Math.random() * possible.length))).join('');
};

exports.getTwoDecimalCeil = (value) => {
  return Math.ceil(value * 100) / 100;
};

exports.getTwoDecimalFloor = (value) => {
  return Math.floor(value * 100) / 100;
};

exports.getTwoDecimalRound = (value) => {
  return Math.round(value * 100) / 100;
};

exports.getDateWithKebabFormat = (dayDiff = 0, monthDiff = 0, yearDiff = 0) => {
  const date = new Date();

  date.setDate(date.getDate() + dayDiff);
  date.setMonth(date.getMonth() + monthDiff);
  date.setFullYear(date.getFullYear() + yearDiff);

  const day = (`0${date.getDate()}`).slice(-2);
  const month = (`0${date.getMonth() + 1}`).slice(-2);
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

exports.isSameDateAs = (a, b) => {
  const aDate = new Date(a);
  const bDate = new Date(b);
  return aDate.getFullYear() === bDate.getFullYear() &&
    aDate.getMonth() === bDate.getMonth() &&
    aDate.getDate() === bDate.getDate();
};

exports.sumObjectValues = (data) => Object.values(data).reduce((result, item) => result + item, 0);

exports.phoneNumberRegExp = /^861[3456789]\d{9}$|^[2-9][0-9]{2}[2-9][0-9]{2}\d{4}$|^1[3456789]\d{9}$/;
exports.cn86PhoneNumberRegExp = /^861[3456789]\d{9}$/;
exports.cnPhoneNumberRegExp = /^1[3456789]\d{9}$/;
exports.usPhoneNumberRegExp = /^[2-9][0-9]{2}[2-9][0-9]{2}\d{4}$/;
exports.emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


exports.getPhoneNumberCountry = number => {
  if (this.cnPhoneNumberRegExp.test(number)) return 'cn';
  if (this.cn86PhoneNumberRegExp.test(number)) return 'cn';
  if (this.usPhoneNumberRegExp.test(number)) return 'us';
  return 'us';
};

exports.getPurePhoneNumber = number => {
  if (this.cnPhoneNumberRegExp.test(number)) return number;
  if (this.cn86PhoneNumberRegExp.test(number)) return number.toString().slice(2);
  return number;
};

exports.isChinaPhoneNumber = number => {
  const phoneNumberRegExp = /^861[3456789][0123456789]\d{8}$/;
  return phoneNumberRegExp.test(number);
};

// exports.getPhoneNumberCountry = number => {
//   const phoneNumberRegExp = /^861[3456789][0123456789]\d{8}$/;
//   return phoneNumberRegExp.test(number) ? 'cn' : 'us';
// };

exports.getLocaleByCountry = country => {
  return COUNTRY_TO_LOCALE[country];
};

exports.phoneNumberRegExp = /^861[3456789][0123456789]\d{8}$|^[2-9][0-9]{2}[2-9][0-9]{2}\d{4}$/;

exports.convertToChar = word => {
  return word.split('').map(v => convert(v) || v).join('');
};


exports.converStrapiFilters = function (filters) {
  if (typeof filters.sort == 'string') {
    let sortArr = filters.sort.split(' ').filter(s => s);
    filters.sort = Object.keys(sortArr).reduce((acc, i) => {
      let asc = !/-/.test(sortArr[i]);
      let key = sortArr[i].replace("-", "");
      acc[key] = asc ? 1 : -1;
      return acc;
    }, {})

  }

  return filters;
}