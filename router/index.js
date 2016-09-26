/**
 * @Creator: Liuyanqing
 * @Date: 9/26/16
 */
'use strict';
var Router = require('koa-router'),
    router = new Router();
require('./home').register(router);
module.exports.register = function (app) {
    app.use(router.middleware())
};
