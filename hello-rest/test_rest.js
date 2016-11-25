'use strict'
// 通过babel将ES7进行降级
var register = require('babel-core/register');

register({
    presets: ['stage-3']
});

require('./app.js');