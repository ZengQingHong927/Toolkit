const cache = require('./cache');
const _ = require('lodash');
const ronglian = require('./ronglian');

async function verificationByRedis(mobile) {
    const key = `vc.${mobile}`;
    let store = await cache.get(key);
    let code = null;
    let error = null;

    if (store && store.updatedAt > Date.now() - (60 * 1000) ) {
        store.updatedAt = Date.now();
        await cache.set(key, store);
        
        return 'One time within 1 mintue';
    }

    if (!store) {
        code = _.padStart(_.random(999999), 6, '0');
        store = {
            mobile,
            code,
            createdAt: Date.now(),
            updatedAt: Date.now()
        };
        await cache.set(key,store, { ttl: 30 * 60 });
    }

    store.updatedAt = Date.now();

    await cache.set(key, store);

    return code;
}

async function SMS (mobile) {
    const code = _.padStart(_.random(999999), 6, '0');
    const result = await ronglian.sendCode(mobile, code);
    console.log(result,code);
}

SMS(13661764897);