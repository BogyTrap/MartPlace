$(function() {

    $('select').styler();

    $('.weekly-product__slider').slick({
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
    });



    $('.followers__inner-slider').slick({
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 3,
        variableWidth: true
    });

    $('.header__bottom-inner-menu-btn').on('click', function() {
        $('.header__bottom-inner-menu-list').slideToggle();
    });

    $('.header__bottom-inner-menu-list-home').on('click', function() {
        $('.header__bottom-inner-menu-list-home-widget').slideToggle();
    });

    $('.header__bottom-inner-menu-list-all').on('click', function() {
        $('.header__bottom-inner-menu-list-all-widget').slideToggle();
    });

    $('.header__bottom-inner-menu-list-wordpress').on('click', function() {
        $('.header__bottom-inner-menu-list-wordpress-widget').slideToggle();
    });

    $('.header__bottom-inner-menu-list_pages').on('click', function() {
        $('.header__bottom-inner-menu-list_pages-widget').slideToggle();
    });

    var mixer = mixitup('.newest-release__inner-products');



});
$('.single-commodity__content-front_inner-tabs .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
    $('.single-commodity__content-front_inner-tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.single-commodity__content-front_inner-tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
});