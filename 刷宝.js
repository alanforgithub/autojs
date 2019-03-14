"auto";
var Common = {
    width: device.width, //设备的宽
    height: device.height, //设备的高
    startAPP: function (appName) {
        var isHasApp = launchApp(appName);
        if (!isHasApp) {
            toast('手机未安装：' + appName);
        } else {
            sleep(5000); //停顿5s
            var dom_allow = text('允许').find();
            if (!dom_allow.empty()) {
                toast('找到了');
                dom_allow.click();
            } else {
                toast('没找到');
            }
        }
        return isHasApp;
    },
    closeApp:function(){
        for(var i=0;i<4;i++){
            back();
            sleep(200);
        }
        sleep(1000);
        click(120,1300);
    },
    findDomById: function (idStr) {
        var dom_txt = id(idStr).find();
        if (dom_txt.empty()) {
            toast('没有找到：' + idStr);
            return null;
        } else {
            toast('找到了：' + idStr);
            return dom_txt;
        }
    },
    findDomByText: function (txt) {
        var dom_txt = text(txt).find();
        if (dom_txt.empty()) {
            toast('没有找到：' + txt);
            return null;
        } else {
            toast('找到了：' + txt);
            return dom_txt;
        }
    },
    findDomInsideByText:function(txt,x,y,x1,y1){
        var dom_txt = text(txt).boundsInside(x,y,x1,y1).find();
        if (dom_txt.empty()) {
            toast('没有找到：' + txt);
            return null;
        } else {
            toast('找到了：' + txt);
            return dom_txt;
        }
    }
};

//刷宝app
var shuabao = {
    appName:'刷宝',
    init:function(){
        toast(this.appName);
        var isHasApp = Common.startAPP(this.appName);
        if(!isHasApp)return;     
        sleep(15000);//等待15s
        this.todoTask();
        this.lookVideo();
    },
    closeTaskBox:function(){
        var dom_close = Common.findDomById('imgClose');
        if(dom_close){
            dom_close.click();
        }
    },
    //签到、开宝箱
    todoTask:function(){       
        //切换到任务页面
        var dom_task_bounds = text('任务').findOne().bounds();
        click(dom_task_bounds.centerX(),dom_task_bounds.centerY());
        sleep(500);
        //关闭弹窗
        this.closeTaskBox();
        sleep(300);
        //开宝箱
        click(850,1350);
        sleep(300);
        click(834,432);
        sleep(100);
        click(507,1347);
        //签到
        var dom_sign = Common.findDomByText('立即签到');
        if(dom_sign){
            dom_sign.click();
            sleep(500); 
            click(834,432);   
        }
        

    },
    lookVideo:function(){
        //切换到首页
        var dom_task_bounds = text('首页').findOne().bounds();
        click(dom_task_bounds.centerX(),dom_task_bounds.centerY());
        sleep(500);
        while(true){
            var sleepCount = random(6000,20000);
            if(sleepCount<9000){
                sleepCount = 1000;
            }
            sleep(sleepCount);
            swipe(Common.width/2,Common.height/8*7,Common.width/2,Common.height/8*1,1000);
        }
    }
    

};



shuabao.init();