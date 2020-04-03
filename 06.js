var EventEmitter=require("events").EventEmitter
var emitter=new EventEmitter;
emitter.once("fn",function(){
    console.log("该函数只会执行一次")
})
emitter.emit("fn")
emitter.emit("fn")
console.log("============")
emitter.on("fn1",function(){
    console.log("我可以随便去执行")
})
emitter.emit("fn1")
emitter.emit("fn1")