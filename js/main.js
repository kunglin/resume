///
$(function () {
    'use strict';
    
    getQuote();
    $("#new-quote").on('click', function () {
        getQuote();
    });

    $("#go").on('click', function () {
        var hr = $(this).attr("href");
        var anh = $(hr).offset().top;
        $("html,body").stop().animate({
            scrollTop: anh
        }, 1000);
    });

    var backButton = $('.back-to-top'); //选择侧栏触发器

    backButton.on('click', function () { //监听返回按钮点击事件
        $('html,body').animate({
            scrollTop: 0
        }, 800)
    })

    $(window).on('scroll', function () { //监听window的scroll事件
        //如果已滚动的部分  高于窗口的高度
        if ($(window).scrollTop() > $(window).height())
            //显示返回按钮
            backButton.fadeIn();
        else
            //否则隐藏返回按钮
            backButton.fadeOut();
    })
    //触发scroll事件
    $(window).trigger('scroll');
});

var content = "";
var author = "";

var getQuote = function () {
    $.getJSON("https://v1.hitokoto.cn/", function (json) {
        content = json["hitokoto"];
        author = json["from"];
        $(".top-content").animate({
                opacity: 0
            }, 500,
            function () {
                $(this).animate({
                    opacity: 1
                }, 500);
                $("#text").html(content);
                $("#author").html('— ' + author);
            }
        );
    });
}