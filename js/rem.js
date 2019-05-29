window.onload=function(){
    var timer=null;
    function rem(){
        var uiW=320;
        var winW=document.documentElement.clientWidth || document.body.clientWidth;
        document.getElementsByTagName('html')[0].style.fontSize=winW/uiW*100+"px";
    }
    rem();
    window.onresize=function(){
        timer=setTimeout(rem,200);
    }
};
