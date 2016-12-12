'use strict'
const APIError = require('../rest').APIError;
const TypeImpl = require('./typeImpl');
module.exports = {
    //查询所有分类类别
    'GET /api/types': async (ctx, next) => {
        console.log('---------------查询所有分类类别-----------------------');
        ctx.rest({
            types: await TypeImpl.ALL()
        });
    },
    // 添加分类类别
    'POST /api/types': async (ctx, next) => {
        console.log('---------------添加分类类别-----------------------');
        var t = ctx.request.body;
        if (!t.typeName || !t.typeName.trim()) {
            throw new APIError('invalid_input', 'Missing typeName');
        }
        ctx.rest(await TypeImpl.INSERT(t.typeName));
    },
    //修改
    'PUT /api/types/:id': async (ctx, next) => {
        console.log('---------------修改-----------------------');
        var t = ctx.request.body;
        var id = ctx.params.id;
        var name = t.name;
        ctx.rest({
            result: await TypeImpl.UPDATE(id, name)
        }
        );
    },
    // 删除
    'DELETE /api/types/:id': async (ctx, next) => {
        console.log('---------------删除-----------------------');
        var id = ctx.params.id;
        ctx.rest({
            result: await TypeImpl.DELETE(id)
        }
        );
    }

}