if(document.querySelector('.completed-projects__slider')) {
$(document).ready(function(){
    $('.completed-projects__slider').slick({
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        // centerMode: true,
        // centerPadding: '60px',
        dots: true,
        appendArrows:$('.completed-projects__arrows-wrapper'),
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
                //   centerMode: true,
                //   variableWidth: true,
                //   centerPadding: '60px',
                }
              },
              {
                breakpoint: 581,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                //   centerMode: true,
                //   variableWidth: true,
                //   centerPadding: '60px',
                }
              }]
    });
  });
}