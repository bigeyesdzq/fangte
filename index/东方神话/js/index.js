/**
 * Created by Administrator on 2017/6/5 0005.
 */
//garden_bot下拉列表


var garden = document.getElementById("garden");
var garden_bot = document.getElementById("garden_bot");
var ul = garden_bot.children[0];
var lis = ul.children;
var garden1 = document.getElementById("garden1");
var garden1_ul = garden1.children[0];
var garden1_lis = garden1_ul.children;
garden.onmouseenter = function () {
    animate1(garden_bot, {"height": 400});
    ul.style.backgroundColor = "#8E816A";
}
garden.onmouseleave = function () {
    animate1(garden_bot, {"height": 0})
}
for (var i = 0; i < lis.length; i++) {
    lis[i].onmouseover = function () {
        for (var i = 0; i < lis.length; i++) {
            lis[i].style.backgroundColor = "#8E816A";
        }
        this.style.backgroundColor = "#7D715B";
    }
}
lis[0].onmouseenter = function () {
    garden1.style.display = "block";
    for (var b = 0; b < garden1_lis.length; b++) {
        garden1_lis[b].onmouseenter = function () {
            for (var b = 0; b < garden1_lis.length; b++) {
                garden1_lis[b].style.backgroundColor = "#7D715B";
            }
            this.style.backgroundColor = "#8E816A";
        }
        garden1_lis[b].onmouseleave = function () {
            this.style.backgroundColor = "#7D715B";
        }
    }

}
lis[0].onmouseleave = function () {
    garden1.style.display = "none";
}
//garden_bot下拉列表

//hotel_bot 下拉列表
var hotel_bot = document.getElementById("hotel_bot");
var hotel = document.getElementById("hotel");
var hul = hotel_bot.children[0];
var hlis = hul.children;
hotel.onmouseenter = function () {
    animate1(hotel_bot, {"height": 85});
    hul.style.backgroundColor = "#8E816A";
}
hotel.onmouseleave = function () {
    animate1(hotel_bot, {"height": 0});
}
for (var i = 0; i < hlis.length; i++) {
    hlis[i].onmouseover = function () {
        for (var i = 0; i < hlis.length; i++) {
            hlis[i].style.backgroundColor = "#8E816A";
        }
        this.style.backgroundColor = "#7D715B";
    }
}
//hotel_bot 下拉列表


//banner1
var m1 = document.getElementById("m1");
window.onload = function () {
    animate1(m1, {"left": -275, "opacity": 1});
}
//banner1

//banner2
var story = document.getElementById("story")
var back = document.getElementById("back");
window.onscroll = function () {
    var story_height = window.scrollY;
    if (story_height > 400) {       //返回顶部
        animate(back, {"opacity": 1});
    } else {
        animate(back, {"opacity": 0})//返回顶部
    }
    if (story_height > 1100) {
        animate(story, {"right": -330})
    }
}
var timer = null;
back.onclick = function () {
    clearInterval(timer);
    var leader = document.body.scrollTop;
    timer = setInterval(function () {
        var step = 100;//如果当前的位置在target左边，步长为正，继续向右移动。
        leader = leader - step;
        console.log(leader);
        document.body.scrollTop = leader;
        if (leader < 0) {
            clearInterval(timer);
        }
    }, 15);
}
//返回顶部finish

//banner3滚动条begin
var pic_ul = document.getElementById("pic_ul");
var arr_left = document.getElementById("arr_left");
var pic_lis = pic_ul.children;
var timer = null;
arr_left.onclick = function () {
    var target = pic_ul.offsetLeft + 320;
    clearInterval(timer);
    animate1(pic_ul, {"left": target}, function () {
        if(target > -320){
            pic_ul.style.left = -1280 + "px";
            target = -1280;
        }
    })
    timer = setInterval(arr_left.onclick, 2000);
}

timer = setInterval(arr_left.onclick, 2000);
for (var j = 0; j < pic_lis.length; j++) {
   // pic_lis[j].children[1].style.marginTop = 20 + "px";
    pic_lis[j].style.height = 900 + "px";
    pic_lis[j].onmouseover = function () {
        clearInterval(timer);
        this.style.backgroundColor = "#8F7E61";
        animate1(this.children[0], {"top": -100});
        animate1(this.children[1],{"opacity":0});
        animate1(this.children[2],{"opacity":1});
    }
    pic_lis[j].onmouseout = function () {
        timer = setInterval(arr_left.onclick, 2000);
        this.style.backgroundColor = "";
        animate1(this.children[0], {"top": 0});
        animate1(this.children[1],{"opacity":1});
        animate1(this.children[2],{"opacity":0});
    }
}
//for (var k = 0; k < pic_lis.length; k++) {
//
//}

//banner3滚动条finish


//banner4 begin
var btn1 = document.getElementById("btn1");
var tv = document.getElementById("tv");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var mask = document.getElementById("mask");
var c = document.getElementById("c");
var hs = c.children;

//btn1
btn1.onmouseover = function () {
    tv.style.backgroundImage = "url(images/m1.jpg)";
    this.children[0].style.color = "#fff";
    this.style.backgroundColor = "#B83C3C";
    btn2.style.backgroundColor = "#fff";
    btn2.children[0].style.color = "#8D5E0F";
    btn3.style.backgroundColor = "#fff";
    btn3.children[0].style.color = "#8D5E0F";
    animate1(hs[0],{"opacity":1})
    animate1(hs[1],{"opacity":0})
    animate1(hs[2],{"opacity":0})
}
//btn2
btn2.onmouseover = function () {
    tv.style.backgroundImage = "url(images/m2.jpg)";
    this.children[0].style.color = "#fff";
    this.style.backgroundColor = "#B83C3C";
    btn1.style.backgroundColor = "#fff";
    btn1.children[0].style.color = "#8D5E0F";
    btn3.style.backgroundColor = "#fff";
    btn3.children[0].style.color = "#8D5E0F";
    animate1(hs[0],{"opacity":0})
    animate1(hs[1],{"opacity":1})
    animate1(hs[2],{"opacity":0})
}
//btn3
btn3.onmouseover = function () {
    tv.style.backgroundImage = "url(images/m3.jpg)";
    this.children[0].style.color = "#fff";
    this.style.backgroundColor = "#B83C3C";
    btn2.style.backgroundColor = "#fff";
    btn2.children[0].style.color = "#8D5E0F";
    btn1.style.backgroundColor = "#fff";
    btn1.children[0].style.color = "#8D5E0F";
    animate1(hs[0],{"opacity":0})
    animate1(hs[1],{"opacity":0})
    animate1(hs[2],{"opacity":1})
}
tv.onmouseover = function () {
    animate1(mask, {"opacity": 0.8});
}
tv.onmouseout = function () {
    animate1(mask, {"opacity": 0});
}
//banner4 finish

//缓动函数1
function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {//特殊处理
                //var leader = parseInt(getStyle(obj, k)) || 0;
                var leader = getStyle(obj, k) * 100;//1
                // 0 || 1 结果是1 那么如果透明度当前的值是0 就会变成1
                //所以这里不能给默认值 而且也没有必要
                //透明度没有单位px 所以也不用parseInt 参与运算自动变为数字
                var target = json[k] * 100;//0.5
                var step = (target - leader) / 10;//0.5-1=-0.5
                step = step > 0 ? Math.ceil(step) : Math.floor(step);//-1
                leader = leader + step;
                //obj.style[k] = leader + "px";
                obj.style[k] = leader / 100;//opacity没有单位
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];//无需渐变 直接设置即可
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 20;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader !== target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {//如果有才调用
                fn();//动画执行完成后执行
            }
        }
    }, 50);
}

//缓动函数2
function animate1(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {//特殊处理
                //var leader = parseInt(getStyle(obj, k)) || 0;
                var leader = getStyle(obj, k) * 100;//1
                // 0 || 1 结果是1 那么如果透明度当前的值是0 就会变成1
                //所以这里不能给默认值 而且也没有必要
                //透明度没有单位px 所以也不用parseInt 参与运算自动变为数字
                var target = json[k] * 100;//0.5
                var step = (target - leader) / 10;//0.5-1=-0.5
                step = step > 0 ? Math.ceil(step) : Math.floor(step);//-1
                leader = leader + step;
                //obj.style[k] = leader + "px";
                obj.style[k] = leader / 100;//opacity没有单位
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];//无需渐变 直接设置即可
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 20;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader !== target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {//如果有才调用
                fn();//动画执行完成后执行
            }
        }
    }, 10);
}

function animate2(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {//特殊处理
                //var leader = parseInt(getStyle(obj, k)) || 0;
                var leader = getStyle(obj, k) * 100;//1
                // 0 || 1 结果是1 那么如果透明度当前的值是0 就会变成1
                //所以这里不能给默认值 而且也没有必要
                //透明度没有单位px 所以也不用parseInt 参与运算自动变为数字
                var target = json[k] * 100;//0.5
                var step = (target - leader) / 10;//0.5-1=-0.5
                step = step > 0 ? Math.ceil(step) : Math.floor(step);//-1
                leader = leader + step;
                //obj.style[k] = leader + "px";
                obj.style[k] = leader / 100;//opacity没有单位
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];//无需渐变 直接设置即可
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 20;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader !== target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {//如果有才调用
                fn();//动画执行完成后执行
            }
        }
    }, 5);
}
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}


