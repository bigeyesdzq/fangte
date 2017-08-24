

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
    });

    $('.return_top').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 1000);
    })

    $(window).scroll(function () {
        if ($(window).scrollTop() > 750) {
            $('.return_top').fadeIn(500);
        }
        else
            $('.return_top').fadeOut(500);
    })

   