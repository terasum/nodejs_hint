process.next(function(){
  my_expensive_computation_function();
})
//退出事件循环
/*
通过使用process.nextTick 实现将一个非关键性的任务推迟到时间循环的下一轮再执行。
如果想要删除之前创建的一个临时文件，但又不想再对客户端做出响应之前进行该操作，就可以延迟删除操作。
*/
stream.on('data',function(data){
  stream.end("my response");
  process.nextTick(function(){
    fs.unlink("/path/to/file");
  });
});

/*
 * setInterval是无法确保函数被串行执行的
 * 例如
 * 如果 my_async_function函数执行时间较久的话，无法确保函数每次都是串行执行的。
 */
 var interval = 1000;
 setInterval(function(){
   my_async_function(function(){
      console.log("my_async_function finished.");
   });
 });

 /*
  * 为此，可以通过采用setTimeout的方式实现串行执行
  * 通过定义立即执行函数的方式实现函数的串行执行。
  */

  var interval = 1000;
  (function schedule(){
    setTimeout(function do_it(){
      my_async_function(function(){
        console.log("async is done");
        schedule();
      });
    },interval);
  })();
