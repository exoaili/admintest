/**
 * 捕获错误
 * uncaughtException
 */
process.on("uncaughtException",()=>{
    console.log("异常")
})
var c="23"
a.c()  //触发异常
console.log("我还想在活500年")