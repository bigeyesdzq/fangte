/**
 * Created by Administrator on 2017/6/11.
 */
var banner = document.getElementById("banner");
var screen = banner.children[0];
var ul = screen.children[0];
var ol = screen.children[1];
var ulLis = ul.children;//所有的广告
var imgWidth = screen.offsetWidth;
var left = document.getElementById("left");
var right = document.getElementById("right");

//1.1根据图片数量动态生成按钮
for (var i = 0; i < ulLis.length; i++) {
    var li = document.createElement("li");
    //li.innerHTML = i + 1;
    ol.appendChild(li);
}
var olLis = ol.children;//所有的按钮
olLis[0].className = "current";

//1.2克隆第一张广告 放到最后
var firstImg = ulLis[0].cloneNode(true);
ul.appendChild(firstImg);
//2.鼠标经过按钮
//鼠标经过按钮 按钮排他 以动画的形式把ul移动到指定的位置
for (var j = 0; j < olLis.length; j++) {
    olLis[j].index = j;
    olLis[j].onmouseover = function () {
        //排他
        //干掉所有人
        for (var k = 0; k < olLis.length; k++) {
            olLis[k].className = "";
        }
        //留下我自己
        this.className = "current";
        //以动画的形式把ul移动到指定的位置
        //目标 和 按钮索引有关 和 图片宽度有关 而且是负数
        var target = -this.index * imgWidth;
        animate(ul, target);
    };
}
//3.2点击右箭头 以动画的形式把ul移动到指定的位置
var pic = 0;//记录当前正在显示的图片的索引
var square = 0;//记录当前正在亮起的按钮的索引
right.onmouseover = function () {
    right.style.opacity = ".7";
};
right.onmouseout = function () {
    right.style.opacity = ".5";
};
left.onmouseover = function () {
    left.style.opacity = ".7";
};
left.onmouseout = function () {
    left.style.opacity = ".5";
};
right.onclick = function () {
    //先判断 如果是最后一个图片 先让ul瞬间跳会开始位置 然后索引也要归零
    if (pic === ulLis.length - 1) {
        ul.style.left = 0 + "px";
        pic = 0;//索引也要归零
    }
    pic++;//计算出将要显示的图片的索引
    //目标 和pic有关 和 图片宽度有关 而且是负数
    var target = -pic * imgWidth;
    animate(ul, target);
    //按钮也要跟着走
    if (square < olLis.length - 1) {
        square++;
    } else {
        square = 0;
    }
    //干掉所有人
    for (var i = 0; i < olLis.length; i++) {
        olLis[i].className = "";
    }
    //留下对应的
    olLis[square].className = "current";
};
left.onclick = function () {
    //先判断 如果是第一个图片 先让ul瞬间跳到最后的位置 然后索引也要到最后
    if (pic === 0) {
        ul.style.left = -(ulLis.length - 1) * imgWidth + "px";
        pic = ulLis.length - 1;//索引也要归零
    }
    pic--;//计算出将要显示的图片的索引
    //目标 和pic有关 和 图片宽度有关 而且是负数
    var target = -pic * imgWidth;
    animate(ul, target);
    //按钮也要跟着走
    if (square > 0) {
        square--;
    } else {
        square = olLis.length - 1;
    }
    //干掉所有人
    for (var i = 0; i < olLis.length; i++) {
        olLis[i].className = "";
    }
    //留下对应的
    olLis[square].className = "current";
};
setInterval(right.onclick, 6000);//自动播放

function animate(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        var step = 40;
        step = leader < target ? step : -step;//step有了正负
        if (Math.abs(leader - target) >= Math.abs(step)) {
            leader = leader + step;
            obj.style.left = leader + "px";
        } else {
            obj.style.left = target + "px";//手动放到终点
            clearInterval(obj.timer);
        }
    }, 15);
}