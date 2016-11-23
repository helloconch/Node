'use strict'
const Koa = require('koa');
var app = new Koa();

const fn_router = require('koa-router');
const router = fn_router();

const fn_bodyparser = require('koa-bodyparser');
const bodyparser = fn_bodyparser();

//log request url

app.use(async (ctx, next) => {

    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

//add url-router

router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello ,${name}!</h1>`;
});

router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1> 
    <form action="/signin" method="post">
        <p>Name:<input name="name" value="koa"></p>
        <p>Password: <input name="password" type="password"></p>
        <p><input type="submit" value="Submit"></p>
    </form>
    `;

});

router.post('/signin', async (ctx, next) => {
    var name = ctx.request.body.name || '';
    var password = ctx.request.body.password || '';
    console.log(`signin with name:${name} password:${password}`);
    if (name == 'koa' && password == '123456') {
        ctx.response.body = `<h1>Welcome,${name}</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed</h1>
        <p><a href="/">Try Again</a></p>
        `;
    }
});

//add post bodyparser
app.use(bodyparser);

// add router middleware
app.use(router.routes());


app.listen(3000);

console.log('app started at port 3000....');