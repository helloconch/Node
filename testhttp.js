'use strict'
var http = require('http');

// 要开发HTTP服务器程序，从头处理TCP连接，解析HTTP是不现实的。这些工作实际上已经由Node.js自带的http模块完成了。
// 应用程序并不直接和HTTP协议打交道，而是操作http模块提供的request和response对象。
// request对象封装了HTTP请求，我们调用request对象的属性和方法就可以拿到所有HTTP请求的信息；
// response对象封装了HTTP响应，我们操作response对象的方法，就可以把HTTP响应返回给浏览器。

// 创建http server，并传入回调函数:
var server = http.createServer(function (request, response) {
    console.log(request.method + ' url:' + request.url);
    // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
    response.writeHead(200, { 'Content-Type': 'text/html' });
    // 将HTTP响应的HTML内容写入response
    response.end('<h1>HelloWorld</h1>');

});
//监听8080
server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/');



//文件服务器

// 要开发HTTP服务器程序，从头处理TCP连接，解析HTTP是不现实的。这些工作实际上已经由Node.js自带的http模块完成了。
// 应用程序并不直接和HTTP协议打交道，而是操作http模块提供的request和response对象。
// request对象封装了HTTP请求，我们调用request对象的属性和方法就可以拿到所有HTTP请求的信息；
// response对象封装了HTTP响应，我们操作response对象的方法，就可以把HTTP响应返回给浏览器。

var url = require('url');
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));

// 处理本地文件目录需要使用Node.js提供的path模块，它可以方便地构造目录
var path = require('path');
// 解析当前目录
var workDir = path.resolve('.');
// 组合完整的文件路径:当前目录+'pub'+'index.html':
var filePath = path.join(workDir, 'pub', 'index.html');
console.log('.................开始实现文件服务器....................');

var fs = require('fs');

var root = path.resolve('.');

console.log('Static root dir: ' + root);

//创建服务器
var server2 = http.createServer(function (req, resp) {
    // 获得URL的path
    var pathname = url.parse(req.url).pathname;
    //获得本地path
    var local = path.join(root, pathname);

    //获取文件状态
    fs.stat(local, function (err, stats) {
        if (!err && stats.isFile()) {
            //文件存在
            console.log('200' + req.url);
            //发送200响应
            resp.writeHead(200);
            //将文件流导向response
            fs.createReadStream(local).pipe(resp);
        } else {
            console.log('404' + req.url);
            resp.writeHead(404);
            resp.end('404 Not Found');
        }
    });

});

server2.listen(8090);
console.log('server2 is running at http://127.0.0.1:8090/');

