var http = require('http');
var staticServer = require('koa-static');
var logger = require('koa-logger');
var koa = require('koa');
var path = require('path');
var koaJson = require('koa-json');
var bodyParser = require('koa-bodyparser');
var exception = require('./middleware/exception');

var router = require('./router');

var app = koa();
app.use(exception);
app.use(staticServer(path.join(__dirname, 'public')));
app.use(koaJson());
app.use(bodyParser());
app.use(logger());
router.register(app);

http.createServer(app.callback()).listen(9000,function () {
    console.log('server listening on port 9000');
});