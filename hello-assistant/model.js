const fs = require('fs');
const db = require('./db');

let files = fs.readdirSync(__dirname + '/models');
let js_files = files.filter((f) => {
    return f.endsWith('.js');
}, files);
// 通过model中间件将所有子model对外暴露出来
module.exports = {};

for (let f of js_files) {
    let name = f.substring(0, f.length - 3);
    module.exports[name] = require(__dirname + '/models/' + name);
}

module.exports.sync = () => {
    db.sync();
}

