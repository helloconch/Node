'use strict'
//参考http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001471087582981d6c0ea265bf241b59a04fa6f61d767f6000
// 通过babel将ES7进行降级
var register = require('babel-core/register');

register({
    presets: ['stage-3']
});

require('./app.js');