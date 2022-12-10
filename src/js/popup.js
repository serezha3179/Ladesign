
if(document.querySelector('.popup') || document.querySelector('.popup-thanks')) {
let popupWindow = function() {
  let popupLink = document.querySelector('.link-form');
  let popup = document.querySelector('.popup');
  let body = document.querySelector('body');
  let close = document.querySelector('.popup__close');
  let popupBody = document.querySelector('.popup__body')
  let paddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + "px";
  // let modalBody = document.querySelector('.popup__body')
  if(popupLink) {
  popupLink.addEventListener('click',() => {
    popup.classList.add('open');
    body.style.overflow = 'hidden';
    body.style.paddingRight = paddingValue
  });
}
  close.addEventListener('click',() => {
    popup.classList.remove('open');
    body.style.overflow = '';
    body.style.paddingRight = '';
  });
 popup.addEventListener('click', (e) => {
    if(e.target === popupBody) {
       popup.classList.remove('open');
       body.style.overflow = '';
       body.style.paddingRight = '';
    }
 })
}

popupWindow();

let popupThanksWindow = function() {
   let submit = document.querySelector('#submit');
   let popupThanks = document.querySelector('.popup-thanks');
   let popup = document.querySelector('.popup');
   let close = document.querySelector('.popup-thanks__close');
   let paddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + "px";
   let popupThanksBody = document.querySelector('.popup-thanks__body');
   let body = document.querySelector('body');
   // console.log(submit);
   submit.addEventListener('click', (e) => {
       e.preventDefault();
       popupThanks.classList.add('open');
      popup.classList.remove('open');
      body.style.overflow = 'hidden';
      body.style.paddingRight = paddingValue;
   });
   close.addEventListener('click',() => {
       popupThanks.classList.remove('open');
       body.style.overflow = '';
       body.style.paddingRight = '';
   })
   popupThanks.addEventListener('click', (e) => {
    if(e.target === popupThanksBody) {
      popupThanks.classList.remove('open');
       body.style.overflow = '';
       body.style.paddingRight = '';
    }
   }) 
}

popupThanksWindow();
}