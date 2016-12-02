'use strict'
var fn_get=async(ctx,next)=>{
    ctx.render('index.html', {
            title: 'Welcome'
        });
};

module.exports={
    'GET /':fn_get
};