var fs = require('fs');
//查询文件信息
fs.stat('./code/01_eventonce.js',function(err,stat){
  if(err){
    throw err;
  }
  console.log(stat);
})
/*stat 对象还有以下方法：
1. stats.isFile() 如果是标准文件而不是目录，套接字，符号链接或者是设备的话，就返回true
2. stats.isDirectory()如果是目录 返回true
3. stats.isBlockDevice() 如果是块设备，则返回true，大多数uninx 系统中块设备都位于/dev目录下
4. stats.isCharacterDevice() 如果是字符设备，则返回true
5. stats.isSymbolicLink() 如果是符号链接返回true
6. stats.isFifo() 如果是FIFO UNIX下的一种特殊的命名管道 则返true
7. stats.isSocket() 如果是套接字，则返回true
*/
