/**
 * Created by Administrator on 2017/6/9 0009.
 */
$(function () {
    $(".tr0").hover(function () {
        if ($(".ulleyuan1").css("display") == "none")
            $(".ulleyuan1").slideDown();
    }, function () {
        $(".ulleyuan1").slideUp();
    });
    $(".tr1").hover(function () {
        if ($(".ulleyuan2").css("display") == "none")
            $(".ulleyuan2").slideDown();
    }, function () {
        $(".ulleyuan2").slideUp();
    });


    $(".tr5").hover(function () {
        if ($(".weixin1").css("display") == "none")
            $(".weixin1").slideDown();
    }, function () {
        $(".weixin1").slideUp();
    });


    var navul = $(".navul");
    var lis = $(".navul > li");
    var lastPosition = 0;
    for (var i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function () {
            navul.stop().animate({"backgroundPosition": this.offsetLeft});
        };
        lis[i].onmouseout = function () {
            navul.stop().animate({"backgroundPosition": lastPosition});
        };
        lis[i].onclick = function () {
            lastPosition = this.offsetLeft;
        };
    }

    $(".liZt").hover(function () {
        $(".liZt").css("backgroundColor", "#ffc500");
        if ($(".liZt>ul").css("display") == "none")
            $(".liZt>ul").slideDown();
    }, function () {
        $(".liZt").css("backgroundColor", "");
        $(".liZt>ul").slideUp();
    });

    $(".liJc").hover(function () {
        $(".liJc").css("backgroundColor", "#ffc500");
        if ($(".liJc>ul").css("display") == "none")
            $(".liJc>ul").slideDown();
    }, function () {
        $(".liJc").css("backgroundColor", "");
        $(".liJc>ul").slideUp();
    });

    $(".liDg").hover(function () {
        $(".liDg").css("backgroundColor", "#ffc500");
        if ($(".liDg>ul").css("display") == "none")
            $(".liDg>ul").slideDown();
    }, function () {
        $(".liDg").css("backgroundColor", "");
        $(".liDg>ul").slideUp();
    });

    $(".liFw").hover(function () {
        $(".liFw").css("backgroundColor", "#ffc500");
        if ($(".liFw>ul").css("display") == "none")
            $(".liFw>ul").slideDown();
    }, function () {
        $(".liFw").css("backgroundColor", "");
        $(".liFw>ul").slideUp();
    });


    /*banner begin*/

//轮播图
    var bannerli1 = document.getElementById("bannerli1");
    var bannerli2 = document.getElementById("bannerli2");


    setInterval(function () {

        animate(bannerli1, {"left": 1000}, function () {
            animate(bannerli2, {"left": 2200});
        });
        if (bannerli1.style.left == "1000px") {
            animate(bannerli1, {"left": 2200});
            animate(bannerli2, {"left": 1000});

        }
        else {
            animate(bannerli1, {"left": 1000});
            animate(bannerli2, {"left": 2200});
        }

    }, 2000);


    //缓冲动画
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
                    var step = (target - leader) / 5;
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
        }, 15);
    }

    function getStyle(obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj, null)[attr];
        } else {
            return obj.currentStyle[attr];
        }
    }


//左右按钮
    $(".baNext").click(function () {
        if ($("#bannerli1").css("left") == "1000px") {
            $("#bannerli2").css("left", "1000px");
            $("#bannerli1").css("left", "2200px");
        } else {
            $("#bannerli2").css("left", "2200px");
            $("#bannerli1").css("left", "1000px");
        }
    });

    $(".baPrev").click(function () {
        if ($("#bannerli1").css("left") == "1000px") {
            $("#bannerli2").css("left", "1000px");
            $("#bannerli1").css("left", "2200px");
        } else {
            $("#bannerli2").css("left", "2200px");
            $("#bannerli1").css("left", "1000px");
        }
    });


    //tongdao
    var indexgp = document.getElementById("indexgp");
    var p = 0;
    setInterval(function () {
        p -= 39;
        if(p==-156){
            p=0;
        }
        indexgp.style.backgroundPosition =  "120px "+p+"px";
        //animate(indexgp, {"backgroundPosition": ""+y+"px"});
    }, 800);


    var m11 = document.getElementById("m11");
    $(".m2").mouseover(function () {
        animate(m11, {"right": 0})
    });
    $(".m2").mouseout(function () {
        animate(m11, {"right": -349})
    });

    var m33 = document.getElementById("m33");
    $(".m6").mouseover(function () {
        animate(m33, {"bottom": 0})
    });
    $(".m6").mouseout(function () {
        animate(m33, {"bottom": -298})
    });

    var m55 = document.getElementById("m55");
    $(".m4").mouseover(function () {
        animate(m55, {"left": 0})
    });
    $(".m4").mouseout(function () {
        animate(m55, {"left": -349})
    });

    var m99 = document.getElementById("m99");
    $(".m8").mouseover(function () {
        animate(m99, {"left": 0})
    });
    $(".m8").mouseout(function () {
        animate(m99, {"left": -349})
    });


    var c1h = document.getElementById("c1h");
    //var c1=$(".c1");
    var c1span = document.getElementById("c1span");
    $(".c1").mouseover(function () {
        c1h.style.display = "block";
        //c1.style.display = "none";
        animate(c1span, {"top": 0})
    });
    $(".c1h").mouseout(function () {
        c1h.style.display = "none";
        //c1.style.display = "block";
        animate(c1span, {"top": -210})
    });

    var c2h = document.getElementById("c2h");
    //var c2=$(".c2");
    var c2span = document.getElementById("c2span");
    $(".c2").mouseover(function () {
        c2h.style.display = "block";
        //c2.style.display = "none";
        animate(c2span, {"top": 0})
    });
    $(".c2h").mouseout(function () {
        c2h.style.display = "none";
        //c2.style.display = "block";
        animate(c2span, {"top": -210})
    });

    var c3h = document.getElementById("c3h");
    //var c3=$(".c3");
    var c3span = document.getElementById("c3span");
    $(".c3").mouseover(function () {
        c3h.style.display = "block";
        //c3.style.display = "none";
        animate(c3span, {"top": 0})
    });
    $(".c3h").mouseout(function () {
        c3h.style.display = "none";
        //c3.style.display = "block";
        animate(c3span, {"top": -210})
    });

    var c4h = document.getElementById("c4h");
    //var c4=$(".c4");
    var c4span = document.getElementById("c4span");
    $(".c4").mouseover(function () {
        c4h.style.display = "block";
       // c4.style.display = "none";
        animate(c4span, {"top": 0})
    });
    $(".c4h").mouseout(function () {
        c4h.style.display = "none";
        //c4.style.display = "block";
        animate(c4span, {"top": -210})
    });


    //var em=$(".weixin>em");
    //var weixin2=document.getElementById("weixin2");
    $(".weixin").mouseover(function () {
        $("#weixin2").css({"opacity": 1, "display": "block"});
    });
    $(".weixin").mouseout(function () {
        $("#weixin2").css({"opacity": 0, "display": "none"});
    });


    $(".sina").mouseover(function () {
        $(".sina1").css({"opacity": 1, "display": "block"});
    });
    $(".sina").mouseout(function () {
        $(".sina1").css({"opacity": 0, "display": "none"});
    });


    $(".tel").mouseover(function () {
        $(".tel1").css({"opacity": 1, "display": "block"});
    });
    $(".tel").mouseout(function () {
        $(".tel1").css({"opacity": 0, "display": "none"});
    });


    $(".code").mouseover(function () {
        $(".code1").css({"opacity": 1, "display": "block"});
    });
    $(".code").mouseout(function () {
        $(".code1").css({"opacity": 0, "display": "none"});
    });


});





