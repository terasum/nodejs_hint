# 事件发射器模式
通过继承EventEmitter类实现自己的事件发射器
扩展原来的emit方法

```javascript
//事件发射器模式
util = require('util');
var EventEmitter = require('events').EventEmitter;
var MyEventEmitter = function();
//use the util.inherits to inherit the Class
//util.inheits 建立了一条原型链
util.inherits(MyEventEmitter,EventEmitter);
MyEventEmitter.prototype.someMethod = function(){
  this.emit('costom event',"argument 1","argument 2");
}

module.exports = MyEventEmitter;
```
