/**
 * @Creator: Liuyanqing
 * @Date: 9/26/16
 */
'use strict';
var views = require('co-views');

let render = views(__dirname + '/../views/', {
    map: { html: 'swig' },  cache : false
});
module.exports = function* (path,data) {
    return yield render(path,data);
};
