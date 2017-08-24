/**
 * Created by Administrator on 2017/6/6.
 */

// 获取id
function getId(idName) {
    return document.getElementById(idName);
};

/*主题公园下拉特效*/
$(function () {
    $("#topicPark").mouseover(function () {
        $("#parkMenu").stop().slideDown(400);
    });
    $("#topicPark").mouseout(function () {
        $("#parkMenu").stop().slideUp(400);
    });


    /*视频切换特效*/
    $(".vid-list>span").click(function () {
        var index = $(this).index();
        $(this).siblings("span").css("backgroundPosition", "-165px -24px").end().css("backgroundPosition", "-165px -1px");
        $(".vid-tag>span:eq(" + index + ")").siblings("span").css("display", "none").end().css("display", "inline");
        //   $(".vid-tag>span")[index].css("display","none");  为什么 index  这种方法不行？？？
    });


    /*推荐路线部分*/
    var i = 0;
    $(".arr-r").click(function () {
        ++i;
        if (i == 3) {
            i = 0;
        }
        var left = 312 * i;
        $(".pic>ul").css("left", "-" + left + "px");
        $(".pic").css("boxShadow","2px 2px 2px #eee");
    });
    $(".arr-l").click(function () {
        i--;
        if (i == -1) {
            i = 2;
        }
        var left = 312 * i;
        $(".pic>ul").css("left", "-" + left + "px");

    });



    //  table  下拉栏切换  特效
    var arrColor = ["#EA9500", "#E42383", "#3F8804", "#188ED1", "#AA24DB", "#B60F89"];
    $("#dp>li").mouseover(function () {
        var index = $(this).index();
        //$(this).css("backgroundColor","arrColor["+index+"]");
        $(".nav-contain>.box:eq(" + index + ")").siblings(".box").css("opacity", ".3");
        $(".nav-contain>.box:eq(" + index + ")").css("opacity", "1");
        // .siblings(".box").css("backgroundColor","");
        $("#navButtom").stop().fadeIn(1000);

    });
    $("#dp>li").mouseout(function () {
        $("#navButtom").stop().fadeOut(1000);
    });
    $("#navButtom").mouseover(function () {
        $(this).stop().fadeIn(1000);
    });
    $("#navButtom").mouseout(function () {
        $(this).stop().fadeOut(1000);
    });
});


/*table栏切换特效*/
//用数组去存取每一个dp的颜色信息
var navButtom = getId("navButtom");
var arrColor = ["#EA9500", "#E42383", "#3F8804", "#188ED1", "#AA24DB", "#B60F89"];
for (var i = 1; i < 6; i++) {
    var dpi = getId("dp" + i);
    dpi.index = i;
    dpi.onmouseover = function () {
        this.style.backgroundColor = arrColor[this.index - 1];
        this.style.color = "white";
        //navButtom.style.display = "block";
    };
    dpi.onmouseout = function () {
        this.style.backgroundColor = "";
        this.style.color = arrColor[this.index - 1];
        //navButtom.style.display = "none";
    };
}







