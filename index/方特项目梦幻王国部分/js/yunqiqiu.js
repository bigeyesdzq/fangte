/**
 * Created by Administrator on 2017/6/8.
 */

function getId(idName){
    return document.getElementById(idName);
}
var  yun= getId("yun");
var  qiqiu= getId("qiqiu");

window.onload = function(){
    play();
    play1();
};



function play(){
    animate2(yun,250,function(){
        animate2(yun,300,play)
    })
}

function animate2(obj,target,fn){
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        var step = 2;
        step = leader < target ? step : -step;//step有了正负
        if (Math.abs(leader - target) >= Math.abs(step)) {
            leader = leader + step;
            obj.style.left = leader + "px";
        } else {
            obj.style.left = target + "px";//手动放到终点
            clearInterval(obj.timer);
            if(fn){
                fn()
            }
        }
    }, 100);
}


function play1(){
    animate1(qiqiu,206,function(){
        animate1(qiqiu,156,play1)
    })
}

function animate1(obj,target,fn){
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetTop;
        var step = 2;
        step = leader < target ? step : -step;//step有了正负
        if (Math.abs(leader - target) >= Math.abs(step)) {
            leader = leader + step;
            obj.style.top = leader + "px";
        } else {
            obj.style.top = target + "px";//手动放到终点
            clearInterval(obj.timer);
            if(fn){
                fn()
            }
        }
    }, 100);
}


