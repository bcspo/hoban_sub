$(function () {
    const visual = new Swiper(".mainvisual", {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: ".mainvisual .pagination",
            clickable: true,
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });

    const business = new Swiper(".business", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {

            768: {
                slidesPerView: 4,
            },

        }

    });


    $('.mopen').on('click', function () {
        $('#header .gnb').toggleClass('on')
    })
})