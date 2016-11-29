const configDefault = './config-default';
const configTest = './config-test';
const fs = require('fs');
var config = null;

if (process.env.NODE_ENV === 'test') {
    console.log('进入测试配置信息');
    config = require(configTest);
} else {
    console.log('进入正式配置信息');
    config = require(configDefault);
}
module.exports = config;
