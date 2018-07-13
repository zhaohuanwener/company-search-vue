require('./check-versions')()
const routes = require('../src/serverRoutes')
var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')
const webpackDevServer = require('webpack-dev-server')
// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser

var compiler = webpack(webpackConfig)

var server = new webpackDevServer(compiler, {
  hot: true
});
server.listen(8080);


