//this is a once extend file for EventEmitter
var events = require('events');
var Eventemitter = events.EventEmitter();
EventEmitter.prototype.once = function (type,callback) {
        // here ensure the scope is the once function and the parent object is once function
        var that = this;
        this.on(type,function listener(){
          callback.apply(that,arguments);
        })
};
