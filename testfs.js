'use strict'
var fs=require('fs');
//使用node内置fs模块，异步读取文件
fs.readFile('note.txt','utf-8',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});

fs.readFile('note.txt',function(err,data){
    if(err){
        console.log(err);
    }else{
        // Buffer -> String
        console.log(data.toString('utf-8'));
        // String -> Buffer
        // var buf = new Buffer(text, 'utf-8');

    }
});

//同步读取文件
try{
var data=fs.readFileSync('note.txt','utf-8');
console.log(data);
}catch(err){
    console.log(err);
}

//读取二进制文件

fs.readFile('bird.jpg',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data.length+' byte');
    }
});


//异步写入文件
var content='雪下得那么认真。';
fs.writeFile('note.txt',content,function(err){
    if(err){
      console.log(err);
    }else{
      console.log('ok');
    }
});