'use strict'
const Koa = require('koa');
const bodyparser = require('koa-bodyparser')();
var app = new Koa();
const controller = require('./controller');
app.use(bodyparser);
// 使用middleware
app.use(controller());

app.listen(3000);
console.log('listen at port :3000');