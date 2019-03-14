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
var shuabao = {};
