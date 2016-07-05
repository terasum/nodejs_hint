//使用setTimeout 令函数延迟执行
var timeout_ms = 2000
var timeout = setTimeout(function(){
  console.log("time out");
},timeout_ms);
//使用clearTimeout 取消执行函数
clearTimeout(timeout);

//可以使用setInterval函数让函数周期性地执行
var period = 1000;
setInterval(function(){
  console.log('tick');
},period);

//可以用clearInterval 清除周期执行的函数
