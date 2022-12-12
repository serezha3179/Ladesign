if(document.querySelector('.apartment-design')) {
    $(document).ready(function() {
        $('.apartment-design-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            appendArrows:$('.apartment-design-slider__arrows-wrapper'),
        })
    })
}