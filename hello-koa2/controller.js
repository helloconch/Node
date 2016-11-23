'use strict'
const router = require('koa-router')();
var fs = require('fs');
var path = require('path');
// 解析当前目录
var workDir = path.resolve('.');

function addControllers(router, dir) {
    var files = fs.readdirSync(workDir + '/' + dir);
    var js_files = files.filter((f) => {
        return f.endsWith('.js');
    });

    for (var f of js_files) {
        console.log(`process controller:${f}....`);
        let mapping = require(workDir + '/' + dir + '/' + f);
        addMapping(router, mapping);
    }

}

function addMapping(router, mapping) {
    //for ... in循环，它可以把一个对象的所有属性依次循环出来
    for (var url in mapping) {
        if (url.startsWith('GET ')) {
            var path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST ')) {
            var path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}

module.exports = function (dir) {
    console.log('dir:' + dir);
    // 如果不传参数，扫描目录默认为'controllers'
    let controllers_dir = (dir === undefined) ? 'controllers' : dir;
    addControllers(router, controllers_dir);
    return router.routes();
};