'use strict'
//模拟数据库
var products = [{
    name: 'iPhone',
    price: 6999
}, {
    name: 'Kindle',
    price: 999
}];

var fn_get = async (ctx, next) => {
    //设置Content-Type
    ctx.response.type = 'application/json';
    //设置Response Body
    ctx.response.body = {
        products: products
    };
}

var fn_post = async (ctx, next) => {

    var p = {
        name: ctx.request.body.name,
        price: ctx.request.body.price
    }

    products.push(p);
    ctx.response.type = 'application/json';
    ctx.response.body = p;

};


module.exports = {
    'GET /api/products': fn_get,
    'POST /api/products': fn_post
}