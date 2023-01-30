
   if(document.querySelector('.project-features__modal-window') && window.matchMedia("(min-width: 1025px").matches) {
    const picture = document.querySelector('.project-features__items');
    const modalWindow = document.querySelector('.modal-window');
    const modalWindowBody = document.querySelector('.modal-window__body');
    let totalSlides = document.querySelectorAll('.modal-slider__item').length;
    let spanCurrent = document.querySelector('.number-slide-js');
    const modalClose = document.querySelector('.modal-window__content-close img');
    const body = document.querySelector('body');
    let paddingValue = window.innerWidth - document.querySelector('.wrapper').clientWidth + "px";

    picture.addEventListener('click',openModal)

   function openModal(e) {
       e.preventDefault();
       let tabIndex = Number(e.target.getAttribute('data-index'))
       modalWindow.classList.add('show');
       body.style.overflow = "hidden";
       body.style.paddingRight = paddingValue;
       spanCurrent.textContent = (tabIndex + 1) + "/" + totalSlides; 
       initialSlider(tabIndex)
       modalWindow.addEventListener('click', modalWindowClose);
    };
    const modalWindowClose = (e) => {
        if(e.target===modalClose || e.target===modalWindowBody) {
         modalWindow.classList.remove('show');
         body.style.overflow = "";
         body.style.paddingRight = "";
        $('.modal-slider__items').slick('unslick');
         removeEventListener('click', modalWindowClose);
        }
    }

    function initialSlider(initSlide) {
    if(document.querySelector('.modal-window, .show')) {
    $(document).ready(function(){
        $('.modal-slider__items').slick({
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            appendArrows:$('.modal-slider__arrows-wrapper'),
            initialSlide: initSlide,
        })
    })
$('.modal-slider__items').on('beforeChange',function(event, slick, currentSlide, nextSlide) {
    spanCurrent.textContent = (nextSlide + 1) + "/" + totalSlides;
});
    }
  }
}




