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
fs.writeFile('output.txt',content,function(err){
    if(err){
      console.log(err);
    }else{
      console.log('ok');
    }
});

//通过stat获取文件大小以及创建时间等信息

fs.stat('note.txt',function(err,stat){
    if(err){
        console.log(err);
    }else{
        //是否是文件
        console.log(stat.isFile());
         //是否是目录
        console.log(stat.isDirectory());

        if(stat.isFile()){
            // 文件大小:
            console.log('size:'+stat.size);
            // 创建时间, Date对象:
              console.log('size:'+stat.birthtime);
           // 修改时间, Date对象:
             console.log('size:'+stat.mtime);
        }


    }
});