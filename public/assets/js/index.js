$(document).ready(function() {

    // home
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
        pager: false,
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

    // furniture
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

    // news
    $(".slide-news__content").lightSlider({
        item: 1,
        autoWidth: false,
        speed: 1500,
        auto: true,
        loop: true,
        pauseOnHover: true,
        pager: true,
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

    $('.select').click(() => {
        $('.dropdown_content').toggleClass('display');
    });

});