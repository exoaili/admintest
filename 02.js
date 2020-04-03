/**
 * exit
 * 
 */

 // 当进程退出时触发，固定时间去执行，注意exit的回调结束后，主事件不在执行，所以计时器会失效
process.on("exit",function(){
    // 设置延时
    setTimeout(function(){
        console.log("主要事件已经停止，所以不会执行")
    },0)
    console.log("退出当前执行")
})
setTimeout(function(){
    console.log(1)
},500)