'use strict'
var fn_index = async (ctx, next) => {

    ctx.render('../views/index.html',{
        title:'Welcome'
    });

};
module.exports = {
    'GET /': fn_index
}