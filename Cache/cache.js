const cacheManager = require('cache-manager');
const redisStore = require('cache-manager-redis');
const Promise = require('bluebird');

const redisCache = cacheManager.caching({ store: redisStore, db: 0, ttl: 1800 });
const memoryCache = cacheManager.caching({ store: 'memory', max: 100, ttl: 10 });
const multiCache = cacheManager.multiCaching(
  [memoryCache, redisCache], { promiseDependency: Promise },
);

module.exports = multiCache;
