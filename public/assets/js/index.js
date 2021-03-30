$(document).ready(function() {

    $(".list_house").lightSlider({
        item: 4,
        autoWidth: true,
        slideMove: 1,
        slideMargin: 10,
        speed: 1000,
        auto: true,
        loop: true,
        slideEndAnimation: true,
        keyPress: true,
        controls: true,
        pager: false,
        enableTouch: true,
        enableDrag: true,
        freeMove: true,
        pauseOnHover: true,
    });

    $(".list_home_infor_2").lightSlider({
        item: 1,
        autoWidth: false,
        speed: 1500,
        slideMargin: 0,
        auto: true,
        loop: true,
        pauseOnHover: true,
    });

    $(".list_home_infor_1").lightSlider({
        item: 1,
        autoWidth: false,
        speed: 1500,
        slideMargin: 0,
        auto: true,
        loop: true,
        pauseOnHover: true,
    });

    $(".slide-furniture").lightSlider({
        item: 1,
        autoWidth: false,
        speed: 1500,
        auto: true,
        loop: true,
        pauseOnHover: true,
    });

    $(".accessory-product").lightSlider({
        item: 4,
        auto:true,
        slideMove: 1,
        loop:true,
        pauseOnHover: true,
        pager: false,
        speed: 1500,

    });


    if ($(window).width() < 768) {
        $("#image").lightSlider({
            item: 1,
            autoWidth: false,
            slideMove: 1,
            slideMargin: 0,
            speed: 1000,
            auto: false,
            loop: true,
            slideEndAnimation: true,
            keyPress: true,
            controls: true,
            pager: false,
        });
        $("#list_video").lightSlider({
            item: 1,
            autoWidth: false,
            slideMove: 1,
            slideMargin: 0,
            speed: 1000,
            auto: false,
            loop: true,
            slideEndAnimation: true,
            keyPress: true,
            controls: true,
            pager: false,
        });
    }


    $('.btn_1').click(() => {
        $('.btn_1').toggleClass('red');
        $('.btn_2').removeClass('red');
    });

    $('.btn_2').click(() => {
        $('.btn_2').toggleClass('red');
        $('.btn_1').removeClass('red');
    });


    $('.select').click(() => {
        $('.dropdown_content').toggleClass('display');
    });

});