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

//头条多多
var toutiaoduoduo = {
    appName: '头条多多',
    init: function () {
        toast(this.appName);
        var isHasApp = Common.startAPP(this.appName);
        if(!isHasApp)return;     
        sleep(15000);//等待15s
        //this.todoTask(); //晒收入
        this.lookArticle();
    },
    //任务： 签到、晒收入
    todoTask: function () {
        toast("赚钱");
        click(540, 1776, 810, 1920);
        sleep(1000);
        //签到

        //晒收入
        for (var i = 0; i < 3; i++) {
            swipe(Common.width / 2, Common.height / 6 * 5, Common.width / 2, 50, 600);
            sleep(200);
        }
        var dom_share = Common.findDomByText('晒收入');
        if(dom_share){          
            click(820,740);
            sleep(6000);
            //晒微信好友
            for(var i=0;i<2;i++){
                shareAction(480,1700,1);
            }
            //晒朋友圈
            for(var i=0;i<2;i++){
                shareAction(800,1700,2);
            }
            back();
        }

        function shareAction(x,y,type){
            click(x,y);
            sleep(5000);//等待8s
            back();
            if(type==2){
                //朋友圈
                sleep(1500);
                var dom_bubaoliu = Common.findDomByText('不保留');
                dom_bubaoliu.click();

            }else{
                sleep(500);
                back();
            }          
            sleep(2000);
        }
    },
    lookOneArticle:function(){
        //开始看文章了       
        var dom_adv = Common.findDomInsideByText('广告',0,106,1080,1208);       
        if(!dom_adv){
            //不是广告位
            click(Common.width/2,370);
            sleep(1200);//等待文章加载
            for(var i=0;i<14;i++){                
                var scrollHeight = random(800,1000);//滑动的距离
                if(i>6){
                    scrollHeight = random(50,100);  
                }
                var sleepTime = random(1200,2000);//睡眠时长
                swipe(Common.width / 2, Common.height / 6 * 5, Common.width / 2, scrollHeight, 600);    
                sleep(sleepTime);
            }
            //拉到文章最末尾
            var count = random(20,25);
            for(var i=0;i<count;i++){
                swipe(Common.width / 2, Common.height / 6 * 5, Common.width / 2, 50, 200); 
                sleep(200);   
            }
            back();
        }
        sleep(1000);
    },
    //看文章
    lookArticle:function(){
        toast("首页");
        click(100,1826);
        sleep(1000);
        for(var i=0;i<300;i++){
            this.lookOneArticle();
            swipe(Common.width / 2, Common.height / 6 * 5, Common.width / 2, 800, 600);    
        }
        // console.log(dom_adv);
        // console.show();
    }

}
