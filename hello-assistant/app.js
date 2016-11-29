'use strict'
const model = require('./model');
let type = model.type;
(async () => {
    console.log('table type beging create...');
    var content = await type.create({
        name: '烫伤'
    });
    console.log('table type create...' + JSON.stringify(content));
})();