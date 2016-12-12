var fn_apiError = function(code, message) {
    this.code = code || 'internal:unknown_error';
    this.message = message || '';
}

var fn_rest = (pathPrefix) => {
    pathPrefix = pathPrefix || '/api/';
    console.log('pathPrefix' + pathPrefix);
    return async (ctx, next) => {
        if (ctx.request.path.startsWith(pathPrefix)) {
            console.log(`rest.js抓取REST API ${ctx.request.method}---${ctx.request.url}`);
            ctx.rest = (data) => {
                ctx.response.type = 'application/json';
                ctx.response.body = data;
            };

            try {
                await next();
            } catch (e) {
                console.log('`rest.js抓取REST API error....'+e);
                ctx.response.status = 400;
                ctx.response.type = 'application/json';
                ctx.response.body = {
                    code: e.code || 'internal:unknown_error',
                    message: e.message || ''
                }
            }
        } else {
            await next();
        }

    }

}

module.exports = {
    APIError: fn_apiError,
    restify: fn_rest
}