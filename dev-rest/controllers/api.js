const products = require('../products');
const APIError = require('../rest').APIError;

var fn_get = async (ctx, next) => {
    ctx.rest({
        products: products.getProducts()
    });
}

var fn_post = async (ctx, next) => {

    var p = products.createProduct(ctx.request.body.name,
        ctx.request.body.manufacturer,
        parseFloat(ctx.request.body.price));

    ctx.rest(p);

}

var fn_delete = async (ctx, next) => {
    console.log(`delete product ${ctx.params.id}...`);
    var p = products.deleteProduct(ctx.params.id);
    if (p) {
        ctx.rest(p);
    } else {
        throw new APIError('product:not_found', 'product not found by id.');
    }
}

module.exports={
     'GET /api/products':fn_get,
     'POST /api/products':fn_post,
     'DELETE /api/products/:id':fn_delete
}