const path = require('path');
const mime = require('mime');
// mz提供的API和Node.js的fs模块完全相同，
// 但fs模块使用回调，而mz封装了fs对应的函数，并改为Promise。
// 这样，我们就可以非常简单的用await调用mz的函数，而不需要任何回调
const fs = require('mz/fs');

function staticFiles(url, dir) {

    return async (ctx, next) => {
        let rpath = ctx.request.path;
        //判断是否以指定的URL开头
        if (rpath.startsWith(url)) {
            // 获取文件完整路径
            let fp = path.join(dir, rpath.substring(url.length));
            // 判断文件是否存在
            if (await fs.exists(fp)) {
                // 查找文件mime
                ctx.response.type = mime.lookup(rpath);
                ctx.response.body = await fs.readFile(fp);
            } else {
                ctx.response.status = 404;
            }
        } else {
            //不是指定前缀url,继续处理下一个middleware
            await next();
        }
    }
}

module.exports = staticFiles;