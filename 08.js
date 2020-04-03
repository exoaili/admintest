/**
 * setMaxListeners  设置最大事件回调   node默认可以指定最多10个
 * 
 */
var EventEmitter=require("events").EventEmitter
var emitter=new EventEmitter;
emitter.on("fn",function(){
    console.log(1)
})
emitter.on("fn",function(){
    console.log(1)
})
emitter.on("fn",function(){
    console.log(1)
})
emitter.on("fn",function(){
    console.log(1)
})
emitter.on("fn",function(){
    console.log(1)
})
emitter.on("fn",function(){
    console.log(1)
})
emitter.on("fn",function(){
    console.log(1)
})
emitter.on("fn",function(){
    console.log(1)
})
emitter.on("fn",function(){
    console.log(1)
})
emitter.on("fn",function(){
    console.log(1)
})
emitter.emit("fn")
emitter.setMaxListeners(10)
// removeAllLiteners  清除所有事件


/**
 * on 
 * emit
 * once
 * addlisteners
 * removeListeners
 * setMaxListeners
 * removeAllListeners
 */