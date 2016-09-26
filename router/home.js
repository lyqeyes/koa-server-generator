/**
 * @Creator: Liuyanqing
 * @Date: 9/26/16
 */
'use strict';
var fs = require('fs');
var path = require('path');
var render = require('../lib/render');
var config = require('../config.js');
var creator = function (path) {
  return function* () {
      return this.body = yield render(path);
  }
};
module.exports.register = function (router) {
    config.pages.forEach(function (n) {
        router.get(`/${n}`,creator(n));
    });
    router.get('/',function *() {
        return this.body = "<h1>welcome</h1>";
    });
    router.get('/test/cookie',function* () {
        this.cookies.set('cookie-key','cookie-value');
        return this.body = yield render('cookie');
    })
};