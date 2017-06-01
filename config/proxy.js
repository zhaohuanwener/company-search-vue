const _ = require('underscore');

const target = 'http://localhost:8010';

const urlList = [
  '/search',
  '/company'
];
const proxyTable = {};

urlList.forEach(function(u) {
  proxyTable[u] = {};
  proxyTable[u].pathRewrite = {};
  proxyTable[u].pathRewrite['^' + u] = u//.replace('*', '');
  proxyTable[u].target = target;
  proxyTable[u].changeOrigin = true;
});

module.exports = proxyTable;
