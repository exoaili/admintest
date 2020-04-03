/**
 * Events
 * 定义：
 * Events是nodejs中发布(publish)和订阅(subscribe)模式
 * 
 * 作用：
 * 传递信息
 */
var EventEmitter=require("events").EventEmitter
var emitter=new EventEmitter
/**
 * on    监听事件，如果触发就调用回调函数
 * once   监听事件  但是回调函数只执行一次
 * emit   发送通知，传递信息
 * 
 * 
 */
emitter.on("fn",function(){
    console.log("将要触发该函数")
})
// 如何触发  emit
emitter.emit("fn")