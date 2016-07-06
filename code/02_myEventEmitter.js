//事件发射器模式
/*
util = require('util');
var EventEmitter = require('events').EventEmitter;
var MyEventEmitter = function();
//use the util.inherits to inherit the Class
//util.inheits 建立了一条原型链
util.inherits(MyEventEmitter,EventEmitter);
MyEventEmitter.prototype.someMethod = function(){
  this.emit('costom event',"argument 1","argument 2");
}*/

// module.exports = MyEventEmitter;

/*
use method
*/
/*var myInstance = new MyEventEmitter();
myInstance.on("costom event",function(str1,str2){
    console.log("cos event %s %s",str1,str2);

})*/
var util = require('util');
var EventEmitter = require('events').EventEmitter;
var Ticker = function(){
  var self = this;
  setInterval (function(){
    self.emit('tick');
  },1000);
}

util.inherits(Ticker,EventEmitter);

var ticker = new Ticker();
ticker.on('tick',function(){
  console.log('tick');
})
