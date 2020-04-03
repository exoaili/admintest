// 标注输出   WritableStream
// console.log(process.stdout.write("eeee\n444444"))
// SIGINT  捕获当前进程接收到的信号    获取按键信息到应用程序中  =》java Scanner
process.on("SIGINT",()=>{
    console.log("收到singint的信号")
})
console.log("按一下c")
setTimeout(function(){
    console.log("end")
},30000)