'use strict'
var fn_signin = async (ctx, next) => {

    var email = ctx.request.body.emal || '';
    var password = ctx.request.body.password || '';

    if (emal === 'admin@gmail.com' && password === '123456') {
        console.log('signin ok');
        ctx.render('../views/signin-ok.html', {
            title: 'Sign In Ok',
            name: 'Mr Node'
        });
    }else{
        console.log('signin failed');
        ctx.render('../views/sign-failed.html',{
            title:'Sign In Failed'
        });
    }

};
module.exports = {
    'POST /signin': fn_signin
}