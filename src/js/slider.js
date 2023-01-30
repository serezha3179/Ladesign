if(document.querySelector('.completed-projects .slider__items')||document.querySelector('.similar-projects .slider__items')) {
$(document).ready(function(){
    $('.slider__items').slick({
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        appendArrows:$('.slider__arrows-wrapper'),
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 769,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                }
              },
              {
                breakpoint: 581,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                }
              }]
    });
  });
}