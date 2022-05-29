$(function () {
    "use strict";
    var $iframe = $(".trailer");

    function toggleVideo(target) {
        if ($(window).scrollTop() + ($(window).height() / 2) >= $(target).position().top) {
            var attrValue = $(target).attr("src");
            attrValue += "?autoplay=1&amp";
            $(target).attr("src", attrValue);
            $(window).off();
            console.log("off");
        }
    }
    $(window).scroll(function () {
        toggleVideo($iframe);
    })

});