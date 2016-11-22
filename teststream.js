'use strict'
var fs=require('fs');
var input=fs.createReadStream('note.txt','utf-8');
//data事件表示流的数据已经可以读取了
//data事件可能会有多次，每次传递的chunk是流的一部分数据。
input.on('data',function(trunck){
    console.log(trunck);
});
//error事件表示出错
input.on('error',function(err){
    console.log('error:'+err);
});
//end事件表示这个流已经到末尾
input.on('end',function(){
    console.log('end');
});

//以流的形式写入文件，只需要不断调用write()方法，最后以end()结束
var output=fs.createWriteStream('output.txt','utf-8');
output.write('AAA\n');
output.write('END');
output.end();

//以流的形式写入文件，只需要不断调用write()方法，最后以end()结束：
var output2=fs.createWriteStream('output.txt');
output2.write(new Buffer('BB\n','utf-8'));
output2.write(new Buffer('End','utf-8'));
output2.end();

// 就像可以把两个水管串成一个更长的水管一样，两个流也可以串起来。
// 一个Readable流和一个Writable流串起来后，所有的数据自动从Readable流进入Writable流，
// 这种操作叫pipe。
// 在Node.js中，Readable流有一个pipe()方法，就是用来干这件事的。
// 让我们用pipe()把一个文件流和另一个文件流串起来，这样源文件的所有数据就自动写入到目标文件里了，
// 所以，这实际上是一个复制文件的程序
var input2=fs.createReadStream('note.txt','utf-8');
var output3=fs.createWriteStream('copy.txt');
//默认情况下，当Readable流的数据读取完毕，end事件触发后，将自动关闭Writable流。
// 如果我们不希望自动关闭Writable流，需要传入参数：
// readable.pipe(writable, { end: false });
input2.pipe(output3);
