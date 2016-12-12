'use strict'
const model = require('../model');
let type = model.type;
// 添加数据
var fn_insert = async (typeName) => {
    var content = await type.create({
        name: typeName
    });
    console.log('table type insert...' + JSON.stringify(content));
    return content;
}
// 查询所有
var fn_all = async () => {
    var types = await type.findAll();
    console.log(`table type all data size... ${types.length}`);
    return types;
}
// 查询单个实体对象
var fn_one = async (itemId) => {
    var typeItem;
    typeItem = await type.findOne({
        where: {
            id: itemId
        }
    });

    // typeItem=await type.findById(itemId);

    return typeItem;
}

// 更新数据
var fn_update = async (itemId, itemName) => {
    try {
        var typeItem = await fn_one(itemId);
        typeItem.name = itemName;
        typeItem.updateAt = Date.now();
        typeItem.version++;
        await typeItem.save();
        return true;
    } catch (e) {
        return false;
    }
}
//删除数据
var fn_delete = async (itemId) => {
    try {
        var typeItem = await fn_one(itemId);
        console.log('delete' + JSON.stringify(typeItem));
        await typeItem.destroy();
    } catch (e) {
        return false;
    }
}

module.exports = {
    INSERT: fn_insert,
    ALL: fn_all,
    SINGLE: fn_one,
    UPDATE: fn_update,
    DELETE: fn_delete
}
