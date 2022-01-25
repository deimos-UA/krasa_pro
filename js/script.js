$( document ).ready(function() {

    let swiper_main_page = new Swiper(".main_slider", {
        pagination: {
            el: ".main_slider_pagination",
        },
        navigation: {
            nextEl: ".main_slider_next",
            prevEl: ".main_slider_prev",
        },
    });

    let swiper_promo = new Swiper(".promo_slider", {
        slidesPerView: 5,
        spaceBetween: 20,
        navigation: {
            nextEl: ".promo_slider_next",
            prevEl: ".promo_slider_prev",
        },
        breakpoints: {
            1281: {
                slidesPerView: 5,
            },
            1025: {
                slidesPerView: 4,
                navigation:{
                    nextEl: null,
                    prevEl: null,
                }
            },
            769: {
                slidesPerView: 3,
            },
            300: {
                slidesPerView: 2,
            },
        },
    });

    let swiper_hits = new Swiper(".bestsellers_slider", {
        slidesPerView: 5,
        spaceBetween: 20,
        navigation: {
            nextEl: ".bestsellers_slider_next",
            prevEl: ".bestsellers_slider_prev",
        },
        breakpoints: {
            1281: {
                slidesPerView: 5,
            },
            1025: {
                slidesPerView: 4,
                navigation:{
                    nextEl: null,
                    prevEl: null,
                }
            },
            769: {
                slidesPerView: 3,
            },
            300: {
                slidesPerView: 2,
            },
        },
    });

    let swiper_new_items = new Swiper(".new_items_slider", {
        slidesPerView: 5,
        spaceBetween: 20,
        navigation: {
            nextEl: ".new_item_slider_next",
            prevEl: ".new_item_slider_prev",
        },
        breakpoints: {
            1281: {
                slidesPerView: 5,
            },
            1025: {
                slidesPerView: 4,
                navigation:{
                    nextEl: null,
                    prevEl: null,
                }
            },
            769: {
                slidesPerView: 3,
            },
            300: {
                slidesPerView: 2,
            },
        },
    });


    let swiper_recently = new Swiper(".recently_items_slider", {
        slidesPerView: 5,
        spaceBetween: 20,
        navigation: {
            nextEl: ".recently_slider_next",
            prevEl: ".recently_slider_prev",
        },
        breakpoints: {
            1281: {
                slidesPerView: 5,
            },
            1025: {
                slidesPerView: 4,
                navigation:{
                    nextEl: null,
                    prevEl: null,
                }
            },
            769: {
                slidesPerView: 3,
            },
            300: {
                slidesPerView: 2,
            },
        },
    });






    let swiper_buy_with = new Swiper(".buy_with_slider", {
        slidesPerView: 5,
        spaceBetween: 20,
        navigation: {
            nextEl: ".buy_with_slider_next",
            prevEl: ".buy_with_slider_next",
        },
        breakpoints: {
            1281: {
                slidesPerView: 5,
            },
            1025: {
                slidesPerView: 4,
                navigation:{
                    nextEl: null,
                    prevEl: null,
                }
            },
            769: {
                slidesPerView: 3,
            },
            300: {
                slidesPerView: 2,
            },
        },
    });


    let swiper_similar = new Swiper(".similar_slider", {
        slidesPerView: 5,
        spaceBetween: 20,
        navigation: {
            nextEl: ".similar_slider_next",
            prevEl: ".similar_slider_prev",
        },
        breakpoints: {
            1281: {
                slidesPerView: 5,
            },
            1025: {
                slidesPerView: 4,
                navigation:{
                    nextEl: null,
                    prevEl: null,
                }
            },
            769: {
                slidesPerView: 3,
            },
            300: {
                slidesPerView: 2,
            },
        },
    });





















    let swiper_big_product = new Swiper(".small_slider_image", {
        direction: 'vertical',
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    let swiper_small_product = new Swiper(".big_slider_image", {

        spaceBetween: 10,
  /*      navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },*/
        thumbs: {
            swiper: swiper_big_product,
        },
    });


/*
    $('.product_image').click(function () {
        $(this).toggleClass('scale');
        $('.product_card').removeClass('scale')
        console.log('ololo')
    });

    $('.read_more').click(function (){
     $('.product_card_desc_hide').removeClass('hide');
     $(this).addClass('hide')
    });

    $('.cookie_confirm').click(function (){
        $('.cookie_wrapper').addClass('hide');
    });*/

/*

    $(window).resize(function () {
        let windowWidth = $(window).width();
        if (windowWidth < 770) {
            $(".footer_nav_list").addClass("hide");
        }
        if (windowWidth > 770) {
            $(".footer_nav_list").removeClass("hide");
        }
    });*/

/*
    $('.question_btn').click(function(event) {
        event.preventDefault();
        let questionName = $(this).attr('data-toggle');
        let questionItemName = $(this).attr('data-q-item');
        let questionContent = $('.question_content[id="' + questionName + '"]');
        let questionBody = $('.question_item[id="' + questionItemName + '"]');
        questionContent.slideToggle(300).toggleClass('hide');
        questionBody.toggleClass('gray');
        $(this).toggleClass('plus');
    });*/

/*

    $('.post_review').click(function (){
        $(this).addClass('hide');
        $('.product_card_review_input').slideToggle(200).removeClass('hide');
        $('.review_about_product_card_wrapper').slideToggle(200).removeClass('hide');
    });

    $('.alphabet_item').click(function(event) {
        event.preventDefault();
        let alphabet_letter = $(this).attr('data-alphabet');
        let brand_name = $('.all_brands[id="' + alphabet_letter + '"]');
        $('.alphabet_item').removeClass('active')
        $(this).addClass('active');
        $('.all_brands').addClass('hide');
        brand_name.removeClass('hide')
    });*/


/*    $('.header_menu_btn').click(function (){
        $('.header_mobile_menu').slideDown(300).removeClass('hide').css('display', 'flex');
    });

    $('.close_menu').click(function (){
        $('.header_mobile_menu').slideUp(300).addClass('hide');
    });*/





    if ($(window).width() < 1025) {
        $(".search_field form").addClass("search__form");
        $(".search_field input").addClass("search__input");
        $(".header_main_wrapper").removeClass("content");
        $('.search_btn').css('display', 'none');
        $('.search__label').on('click', function(e){
            e.preventDefault();

            let $this = $(this),
                form = $this.closest('.search__form'),
                input = form.find('.search__input');

            $('.header_logo').addClass('hide');
            $('.search_field').css('width', '100%');
            $('.header_content').css('width', '80%');
            input.addClass('show').css('padding-right', '45px');
            $('label.search__label').addClass('hide')
            $('.search_btn').css('display', 'inline-block');
        });

        $(document).mouseup(function (e) {
            let container = $('.search__input');
            if (container.has(e.target).length === 0 &&
                $(e.target).closest('form').length === 0){
                container.removeClass('show').css('padding-right', '30px');
                $('.header_logo').removeClass('hide');
                $('.search_field').css('width', '10%');
                $('.header_content').css('width', '20%');
                $('label.search__label').removeClass('hide')
                $('.search_btn').css('display', 'none');
            }
        });
    }
    else {
        $(".search_field form").removeClass("search__form");
        $(".search_field input").removeClass("search__input");
        $(".header_main_wrapper").addClass("content");
        $('.search_btn').css('display', 'inline-block');
        $(document).mouseup(function (e) {
            let container = $('.search__input');
            if (container.has(e.target).length === 0 &&
                $(e.target).closest('form').length === 0){
                $('.search_btn').css('display', 'inline-block');
            }
        });
    }




    if ($(window).width() < 1025) {
        $(".footer_nav_list").addClass("hide");
    }
    else {
        $(".footer_nav_list").removeClass("hide");

    }



    $('.show_menu').click(function(event) {
        event.preventDefault();
        let footerAccord = $(this).attr('data-menu-toggle');
        let footerContent = $('.footer_nav_list[id="' + footerAccord + '"]');
        footerContent.slideToggle(300).toggleClass('hide');
        $(this).toggleClass('minus');
    });





    $('.modal_back').click(function (){
        $(this).addClass('hide')
        $('.modal_window').addClass('hide');
        $('.header_mobile_menu').slideUp(300).addClass('hide').css('display', 'none');
        $('body').removeClass('overflow');
    });

    $('.modal_close').click(function (){
        $('.modal_back').addClass('hide');
        $('.modal_window').addClass('hide');
        $('body').removeClass('overflow');
    });


    $('.ham_btn').click(function (){
        $('.header_mobile_menu').slideDown(300).removeClass('hide').css('display', 'flex');
        $('.modal_back').removeClass('hide');
        $('body').addClass('overflow');
    });

    $('.close_menu').click(function (){
        $('.header_mobile_menu').slideUp(300).addClass('hide');
        $('.modal_back').addClass('hide');
        $('body').removeClass('overflow');
    });



    $('.filter_under_list').click(function(event) {
        event.preventDefault();
        let category_list = $(this).attr('data-category');
        let category_under_list = $('.filter_under_category_list[id="' + category_list + '"]');
        $(category_under_list).slideToggle(300).css('display', 'flex', 'flex-direction', 'column')
    });



    $('.label_all').click(function (){
       $('.label_all').removeClass('label_choice');
       $(this).addClass('label_choice')
    });

    $('.about_heading').click(function(event) {
        event.preventDefault();
        let about_heading = $(this).attr('data-about');
        let about_content = $('.product_about_content[id="' + about_heading + '"]');
        $('.about_heading').removeClass('active');
        $(this).addClass('active');
        $('.product_about_content').addClass('hide');
        about_content.removeClass('hide')
    });


    $('.cookie_modal').click(function (){
        $('.cookie_wrapper').addClass('hide');
    });

    $('.cookie_confirm').click(function (){
        $('.cookie_wrapper').addClass('hide');
    });


    $('.regular_user_ordering').click(function (){
        $('.new_user_ordering').removeClass('active');
        $(this).addClass('active');
        $('.new_user_form').toggleClass('hide');
        $('.regular_user_form').toggleClass('hide');
    });
    $('.new_user_ordering').click(function (){
        $('.regular_user_ordering').removeClass('active');
        $(this).addClass('active');
        $('.new_user_form').toggleClass('hide');
        $('.regular_user_form').toggleClass('hide');
    });

    $('.more_comment_btn').click(function (){
        $(this).addClass('hide');
        $('.review_comment').removeClass('hide');
    });


    $('.modal_back').click(function (){
        $(this).addClass('hide')
        $('.modal_window').addClass('hide');
        $('body').removeClass('overflow');
    });

    $('.modal_close').click(function (){
        $('.modal_back').addClass('hide')
        $('.modal_window').addClass('hide');
        $('body').removeClass('overflow');
    });


    $('.review_btn').click(function (){
        $('.modal_back').removeClass('hide');
        $('.review_modal').removeClass('hide');
        $('body').addClass('overflow')
    });

    $('.close_modal').click(function (){
        $('.modal_back').addClass('hide')
        $('.modal_window').addClass('hide');
        $('body').removeClass('overflow');
    });


    $('.benefits_card').hover(function(event) {
        event.preventDefault();
        let benefit_card = $(this).attr('data-benefit');
        let benefit_content = $('.benefits_card_content[id="' + benefit_card + '"]');
        benefit_content.toggleClass('hide')

    });


    $('.faq_drop_head').click(function(event) {
        event.preventDefault();
        let faq_head = $(this).attr('data-drop-toggle');
        let faq_btn = $(this).find('.faq_drop_btn');
        let faq_content = $('.faq_drop_content[id="' + faq_head + '"]');
        faq_content.slideToggle(300).toggleClass('hide');
        faq_btn.toggleClass('drop_btn');

    });





});