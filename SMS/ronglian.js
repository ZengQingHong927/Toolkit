// const md5 = require('blueimp-md5')
const crypto = require('crypto');
const rp = require('request-promise');
const moment = require('moment')
const Base64 = require('js-base64').Base64;

/**
 * @param {string} text
 * @return {string}
 */
function md5(text) {
    return crypto.createHash('md5').update(text).digest('hex').toUpperCase();
}

/**
 * @param {number} mobile 
 * @param {string} code 
 * @return {object}
 */

module.exports = {
    sendCode: async (mobile, code) => {
        // Information of ronglian account
        const ACCOUNT_SID = '8aaf07086d05d00c016d4f06e51831a4';
        const AUTH_TOKEN = '17af77f5abaa4c6c8cc4bea0a91eb56a';
        const Rest_URL = 'https://app.cloopen.com:8883';
        const AppID = '8aaf07086d05d00c016d4f06e56c31ab';
        //1. url
        /*
         *1.Cypher ACCOUNT_SID+AUTH_TOKEN+time with md5. time is system time in "YYYYMMDDHHmmss" and valid within 24 hours
         *2.SigParameter in uppercase，ex: sig = abcdfg instead of sig = ABCDFG
         */
        let sigParameter = '';
        const time = moment().format('YYYYMMDDHHmmss');
        sigParameter = md5(ACCOUNT_SID+AUTH_TOKEN+time);
        const url = Rest_URL+'/2013-12-26/Accounts/'+ACCOUNT_SID+'/SMS/TemplateSMS?sig='+sigParameter;

        //2. Body
        const body = {
            to : mobile,
            appId : AppID,
            templateId : '1',
            "datas":[code,3]
        }
        //body = JSON.stringify(body);

        //3. headers
        /*
         *1.authorization is composed with ACCOUNT_SID + : + time (system time) encoded by Base64
         *2.时间戳是当前系统时间，格式"YYYYMMddHHmmss"，需与SigParameter中时间戳相同。
         */
        let authorization = ACCOUNT_SID + ':' + time;
        authorization = Base64.encode(authorization);
        const headers = {
            'Accept' :'application/json',
            'Content-Type' :'application/json;charset=utf-8',
            'Content-Length': JSON.stringify(body).length+'',
            'Authorization' : authorization
        }

        //4. send request and get response
        return rp.post(url, {
            json: true,
            body,
            headers,
        }).then((result) => {
            return Promise.resolve(result);
        })
    }
}