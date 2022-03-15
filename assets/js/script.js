$(document).ready(function () {
    $(document).on('scroll', function (e) {
        if ($(this).scrollTop() > 200) {
            $('.header-top').addClass('sticky');
        } else {
            $('.header-top').removeClass('sticky');
        }
    });

    $('.burger-menu').on('click',function(){
        $('.header-top nav').toggleClass('open');
        $('.burger-menu').toggleClass('open');
    });
});