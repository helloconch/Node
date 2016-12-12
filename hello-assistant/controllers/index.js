'use strict'
var fn_get = async (ctx, next) => {
    ctx.render('index.html', {
        title: 'Welcome'
    });
};

var fn_types = async (ctx, next) => {
    ctx.render('types.html');
}

module.exports = {
    'GET /': fn_get,
    'GET /TYPES': fn_types
};