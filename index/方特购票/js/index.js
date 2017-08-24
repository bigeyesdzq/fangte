/**
 * Created by 贾振方 on 2017/6/6.
 */
window.onload = function () {
    var zt = document.getElementById("zt");
    zt.onmouseover = function () {
        animate(zt.children[1], {"height": 351})
    };
    zt.onmouseout = function () {
        animate(zt.children[1], {"height": 0})
    };

    var cityName = document.getElementById("cityName");
    var ul = cityName.children[1];
    var lis1 = ul.children;
    cityName.onmouseover = function () {
        animate(ul, {"height": 306, "padding-top": 7});
    };
    cityName.onmouseout = function () {
        animate(ul, {"height": 0, "padding-top": 0});
    };
    for (var i = 0; i < lis1.length; i++) {
        lis1[i].onclick = function () {
            txt1.innerHTML = this.innerHTML;
        }
    }


    var buy_city = document.getElementById("buy_city");
    var adress = document.getElementById("adress");
    var lis2 = adress.children;
    var txt1 = document.getElementById("txt1");
    var txt2 = document.getElementById("txt2");
    buy_city.onmouseover = function () {
        animate(adress, {"height": 170});
    };
    buy_city.onmouseout = function () {
        animate(adress, {"height": 0});
    };
    for (var i = 0; i < lis2.length; i++) {
        lis2[i].onclick = function () {
            txt1.innerHTML = this.innerHTML;
            txt2.innerHTML = this.innerHTML;
        }
    }


    var ad = document.getElementById("ad");

    function play() {
        anim(ad, {"top": 210}, function () {
            anim(ad, {"top": 190}, function () {
                play();
            })
        })
    }

    play();

    var zz = document.getElementById("zz");
    var hz1 = zz.children[1];
    var as1 = hz1.children;
    zz.onmouseover = function () {
        hz1.style.display = "block";
    };
    zz.onmouseout = function () {
        hz1.style.display = "none";
    };
    for (var i = 0; i < as1.length; i++) {
        as1[i].onmouseover = function () {
            this.style.backgroundColor = "#5FB3EF";
        };
        as1[i].onmouseout = function () {
            this.style.backgroundColor = "#3498db";
        }
    }

    var wh = document.getElementById("wh");
    var hz2 = wh.children[1];
    var as2 = hz2.children;
    wh.onmouseover = function () {
        hz2.style.display = "block";
    };
    wh.onmouseout = function () {
        hz2.style.display = "none";
    };
    for (var i = 0; i < as2.length; i++) {
        as2[i].onmouseover = function () {
            this.style.backgroundColor = "#5FB3EF";
        };
        as2[i].onmouseout = function () {
            this.style.backgroundColor = "#3498db";
        }
    }

    var td = document.getElementById("td");
    td.onmouseover = function () {
        animate(td, {"left": 6}, function () {
            animate(td, {"right": 6}, function () {
                animate(td, {"left": 0}, function () {
                    animate(td, {"left": 3}, function () {
                        animate(td, {"right": 3}, function () {
                            animate(td, {"left": 0});
                        })
                    })
                });
            })
        });
    };

    var weixin = document.getElementById("weixin");
    var wx = document.getElementById("wx");
    var wd_btn = weixin.children[0];
    weixin.onmouseover = function () {
        wx.style.display = "block";
        animate(wd_btn, {"top": -8}, function () {
            animate(wd_btn, {"top": 0}, function () {
                animate(wd_btn, {"top": -4}, function () {
                    animate(wd_btn, {"top": 0})
                })
            })
        });
    };
    weixin.onmouseout = function () {
        wx.style.display = "none";
    }

    var weibo = document.getElementById("weibo");
    var wb_btn = weibo.children[0];
    var wb = weibo.children[1];

    weibo.onmouseover = function () {
        wb.style.display = "block";
        animate(wb_btn, {"width": 32, "height": 30, "opacity": 0.3}, function () {
            animate(wb_btn, {"width": 26, "height": 24, "opacity": 1}, function () {
                animate(wb_btn, {"width": 30, "height": 28, "opacity": 0.6}, function () {
                    animate(wb_btn, {"width": 26, "height": 24, "opacity": 1});
                })
            });
        });
    }

    weibo.onmouseout = function () {
        wb.style.display = "none";
    };

    var tel = document.getElementById("tel");
    var tl = tel.children[1];
    var tl_btn = tel.children[0];
    var t0 = null;
    tel.onmouseover = function () {
        clearInterval(t0);
        tl.style.display = "block";
        var t = 0;
        t0 = setInterval(function () {
            t -= 3;
            if (t === -360) {
                clearInterval(t0);
                t = 0;
            }
            tl_btn.style.transform = "rotate(" + t + "deg)";
        }, 1);
    };

    tel.onmouseout = function () {
        tl.style.display = "none";
    }

    var logo1 = document.getElementById("logo1");
    var lg_btn = logo1.children[0];
    var lg = logo1.children[1];
    logo1.onmouseover = function () {
        lg.style.display = "block";
        animate(lg_btn, {"width": 34, "height": 34, "opacity": 0.6}, function () {
            animate(lg_btn, {"width": 30, "height": 30, "opacity": 0.9}, function () {
                animate(lg_btn, {"width": 36, "height": 36, "opacity": 0.7}, function () {
                    animate(lg_btn, {"width": 31, "height": 31, "opacity": 1})
                })
            })
        })
    };
    logo1.onmouseout = function () {
        lg.style.display = "none";
    };

    var yz1 = document.getElementById("yz1");
    var yz2 = document.getElementById("yz2");
    var yz3 = document.getElementById("yz3");
    var yz4 = document.getElementById("yz4");
    var yz5 = document.getElementById("yz5");
    var yz6 = document.getElementById("yz6");
    var yz7 = document.getElementById("yz7");
    yezi(yz1);
    yezi(yz2);
    yezi(yz3);
    yezi(yz4);
    yezi(yz5);
    yezi(yz6);
    yezi(yz7);


    var y = 0;
    //yz1.style.transform = "rotate(" + (s * 60) + "deg)";
    function yezi(obj) {
        setInterval(function () {
            y += 0.2;
            /*var date = new Date();
             var s = date.getSeconds();*/
            if (y == 360) {
                y = 0;
            }
            obj.style.transform = "rotate(" + y + "deg)";
        }, 30);
        var target1 = parseInt(Math.random() * 1280);
        var target2 = parseInt(Math.random() * 960);

        function fn2() {
            animate1(obj, {"top": target2, "left": target1},
                function () {
                    animate1(obj, {"opacity": 0}, function () {
                        obj.style.left = 0;
                        obj.style.top = 0;
                        obj.style.opacity = 1;
                        fn2();
                    })
                });
        }
        fn2();
    }

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
                    var step = (target - leader) / 10;//0.5-1=-0.5  //改变透明度的变化
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);//-1
                    leader = leader + step;
                    //obj.style[k] = leader + "px";
                    obj.style[k] = leader / 100;//opacity没有单位
                } else if (k === "zIndex") {
                    obj.style.zIndex = json[k];//无需渐变 直接设置即可
                } else {
                    var leader = parseInt(getStyle(obj, k)) || 0;
                    var target = json[k];
                    var step = (target - leader) / 10;  //改变速度
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

    function animate1(obj, json, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            for (var k in json) {
                if (k === "opacity") {
                    var leader = getStyle(obj, k) * 100;
                    var target = json[k] * 100;
                    var step = (target - leader) / 20;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader / 100;
                } else if (k === "zIndex") {
                    obj.style.zIndex = json[k];
                } else {
                    var leader = parseInt(getStyle(obj, k)) || 0;
                    var target = json[k];
                    var step = (target - leader) / 800;
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
                if (fn) {
                    fn();
                }
            }
        }, 30);
    }

    function anim(obj, json, fn) {
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
                    var step = (target - leader) / 10;//0.5-1=-0.5  //改变透明度的变化
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);//-1
                    leader = leader + step;
                    //obj.style[k] = leader + "px";
                    obj.style[k] = leader / 100;//opacity没有单位
                } else if (k === "zIndex") {
                    obj.style.zIndex = json[k];//无需渐变 直接设置即可
                } else {
                    var leader = parseInt(getStyle(obj, k)) || 0;
                    var target = json[k];
                    var step = (target - leader) / 50;  //改变速度
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
        }, 45);
    }

    function getStyle(obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj, null)[attr];
        } else {
            return obj.currentStyle[attr];
        }
    }
}


