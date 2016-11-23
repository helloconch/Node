'use strict'
var fn_index = async (ctx, next) => {

    ctx.render('../views/index.html',{
        title:'Welcome'
    });

};
moudle.exports = {
    'GET /': fn_index
}