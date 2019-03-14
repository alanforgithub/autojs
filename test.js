"auto";
var thread = threads.start(function(){
    //在子线程执行的定时器
    setTimeout(function(){
        log("子线程:" + threads.currentThread());
        console.show();
    }, 1000);
});

log("当前线程为主线程:" + threads.currentThread());
console.show();

//等待子线程启动
thread.waitFor();
//在子线程执行的定时器
thread.setTimeout(function(){
    //这段代码会在子线程执行
    log("当前线程为子线程:" + threads.currentThread());
    console.show();
}, 2000);

log("主线程1s:" + threads.currentThread());
 console.show();


 setTimeout(function(){
    log("111线程:" + threads.currentThread());
    thread.interrupt();
    log("2222:" + threads.currentThread());
    console.show();
}, 6000);