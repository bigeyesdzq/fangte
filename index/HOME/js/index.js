/**
 * Created by Administrator on 2017.06.07.
 */
$(document).ready(function () {
    //左下拉菜单
    $(".topr1").hover(function () {
        if ($(".topul1").css('display') == 'none')
            $(".topul1").slideDown();
    }, function () {
        $(".topul1").slideUp();
    });
    //右下拉菜单
    $(".topr2").hover(function () {
        if ($(".topul2").css('display') == 'none')
            $(".topul2").slideDown();
    }, function () {
        $(".topul2").slideUp();
    });

    $(".topul1 li").hover(function () {
        $(this).children('ul').show();
    }, function () {
        $(this).children('ul').hide();
    });
    $('.return_top').click(function () {
        $('body,html').animate({scrollTop: 0}, 1000);
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 750) {
            $('.return_top').fadeIn(500);
        }
        else
            $('.return_top').fadeOut(500);
    });

    down11();
    setInterval(down11, 1500);
    a2();
    setInterval(a2, 40000);
    donghua2();
    donghua22();
    a1();
    setInterval(a1, 5000);
    hide1();
    anima1();
    setInterval(anima1, 4000);
    anima3();
    setInterval(anima3, 3000);
    intro1();
    anima4();
    setInterval(anima4, 1500);
    anima7();
    setInterval(anima7, 4000);
    anima6();
    setInterval(anima6, 1500);
    anima9();
    setInterval(anima9, 1500);
});

//第一个浮动气球
function anima1() {
    $('.ballon11').animate({
            top: -115,
            left: 950
        }, 2000,
        function () {
            $('.ballon11').animate({
                top: -75,
                left: 910
            }, 2000)
        });
}
//第二个浮动气球
function a1() {
    $('.ballon22').animate({
            top: -100,
            left: 830
        }, 2500,
        function () {
            $('.ballon22').animate({
                top: -126,
                left: 790
            }, 2500)
        });
}
//上方四人组
function donghua2() {
    $('.person2 img').animate({
            top: 500,
            left: -250,
            width: 659
        }, 2000,
        function () {
            $('.person2 img').animate({
                top: 400,
                left: -550
            }, 2000)
        });
}
//下拉滑动图标
function hide1() {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 170) {
            $('.down').hide();
        }
        else {
            $('.down').show();
        }
    });
}
function down11() {
    $('.down').animate({
            bottom: 10,
            opacity: 1
        }, 1500,
        function () {
            $('.down').css("bottom", '50px');
            $('.down').css("opacity", '0.5');
        });
}

//滚轮经过上方1500后显示返回图标
function intro1() {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 500 && $(window).scrollTop() < 1400) {
            donghua22();
        }
        if ($(window).scrollTop() > 1500) {
        }
        if ($(window).scrollTop() > 1800) {

        }
    });
}

//动态海鸥
function anima3() {
    $('.bird1').animate({
            top: -50
        }, 1000,
        function () {
            $('.bird1').animate({
                    top: -10
                }, 1000,
                function () {
                    $('.bird1').animate({
                        top: -30
                    }, 1000)
                });
        });
}
//芜湖动态向右图标
function anima4() {
    $('.right').animate({
            marginLeft: 540,
            opacity: 1
        }, 1500,
        function () {
            $('.right').css("margin-left", '500px');
            $('.right').css("opacity", '0.5');
        });
}
//下方四人组
function donghua22() {
    $('.person3 img').animate({
        top: 560,
        left: 1400,
        width: 548
    }, 2000)
}
//郑州向右滑动图标
function anima6() {
    $('.right1').animate({
            marginLeft: 540,
            opacity: 1
        }, 1500,
        function () {
            $('.right1').css("margin-left", '500px');
            $('.right1').css("opacity", '0.5');
        });
}
//第三个动态气球
function anima7() {
    $('.ballon').animate({
            top: -50,
            left: 950,
            opacity: 1
        }, 2000,
        function () {
            $('.ballon').animate({
                top: -10,
                left: 910
            }, 2000)
        });
}

//下方波浪动态
function a2() {
    $('.foot').animate({
            backgroundPositionX: 0
        }, 20000,
        function () {
            $('.foot').animate({
                backgroundPositionX: -1095
            }, 20000)
        });
}
//一键返回顶端
function anima9() {
    $('.up').animate({
            marginTop: 90,
            opacity: 1
        }, 1500,
        function () {
            $('.up').css("margin-top", '120px');
            $('.up').css("opacity", '0.5');
        });
}

