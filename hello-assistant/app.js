'use strict'
// const model = require('./model');
// let type = model.type;
// (async () => {
//     console.log('table type beging create...');
//     var content = await type.create({
//         name: '烫伤'
//     });
//     console.log('table type create...' + JSON.stringify(content));
// })();

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');
const templating = require('./templating');
const app = new Koa();
const isProduction = process.env.NODE_ENV === 'production';

// 打印请求URL
app.use(async (ctx, next) => {

    console.log(`抓取----方法名${ctx.method} : 请求url${ctx.request.url}`);

    var start = new Date().getTime();
    var execTime;

    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);

});

//static file support
if (!isProduction) {
    let staticFiles = require('./static-files');
    app.use(staticFiles('/static/', __dirname + '/static'));
}

// parse request body
app.use(bodyParser());

// add nunjucks as view
app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));

// add controller:
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');