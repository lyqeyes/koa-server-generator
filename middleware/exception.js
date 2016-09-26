module.exports = function*(next) {
    try {
        yield next;
        if(this.status === 404){
            var err = new Error('请求路径不存在');
            err.code = 404;
            this.throw(err);
        }
    } catch (err) {
        console.log('catch error in exception middleware',err);
        this.response.set('content-type', 'application/json;charset=utf-8');
        return this.response.body = {
            code:err.code || 500,
            message:err.message || '服务器错误'
        };
    }
};
