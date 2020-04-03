/**
 * node 模块
 * 
 * 进程  process
 * 
 * node的特点：
 * 单线程
 * 非阻塞I/O
 * 事件驱动
 * 
 * node的全局变量？
 * process  setTimeout  setInterval
 * process  全局变量
 * 
 * process.version  输出node版本
 * 
 * process.versions  输出node.js 环境相关依赖的版本
 * 
 * process.arch   获取当前电脑的类型
 * x64   x32
 * 
 * process.platform   系统类型
 * os mac 
 * win32  windows
 * linux
 * unix
 * 
 * process.argv  获取命令行参数
 * 
 * process.env   获取当前系统环境变量参数
 * 
 * 
 * process.pid   获取当前进程id,每次创建新的进程，进程id都会发生变化
 * 
 * process.execPath()  获取node的安装目录
 * 
 * process.cwd()   获取当前命令行的执行路径
 * C:\Users\Hanshuo\Desktop\阶段4\day09
 * 
 * process.domain  废弃  获取进程中的局部异常
 * 
 * process.nextTick(fn)  相当于settimeout  性能比settimeout好
 * 
 * function fn(){
 *  console.log(1)
 * }
 * 
 * process.studin  标准输入
 * process.studout  标准输出
 * process.stderr   标准错误
 * process.exit()   退出当前进程      0 正常退出  1  非正常退出
 * process.kill  发送任意信号    
 * 
 * 
 * 
 * 
 * 模块分类：
 * 内置模块(核心模块)  process  settime
 * 外置模块   require
 * 自定义模块  （第三方包=》npm）   require
 * 
 * 
 * 
 * 子进程
 * child_process
 */