
if(document.querySelector('.popup') || document.querySelector('.popup-thanks')) {
let popupWindow = function() {
  const popupLink = document.querySelector('.link-form');
  const popup = document.querySelector('.popup');
  const body = document.querySelector('body');
  const close = document.querySelector('.popup__close img');
  const popupBody = document.querySelector('.popup__body')
  let paddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + "px";
  
 
 const closePopup = (e) => {
  if(e.target === popupBody || e.target === close) {
     popup.classList.remove('open');
     body.style.overflow = '';
     body.style.paddingRight = '';
     let inputs = document.querySelectorAll('input');
     inputs.forEach(item => {
      item.value = '';
     })
     popup.removeEventListener('click', closePopup);
  }
}
  if(popupLink) {
  popupLink.addEventListener('click',() => {
    popup.classList.add('open');
    body.style.overflow = 'hidden';
    body.style.paddingRight = paddingValue
  popup.addEventListener('click', closePopup);
})
   }
}
popupWindow();
let popupThanksWindow = function() {
   const submitPopup = document.querySelector('#submit-popup');
   const popupThanks = document.querySelector('.popup-thanks');
   const popup = document.querySelector('.popup');
   let close = document.querySelector('.popup-thanks__close img');
   let paddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + "px";
   const popupThanksBody = document.querySelector('.popup-thanks__body');
   const body = document.querySelector('body');
   const inputs = document.querySelectorAll('input');
   const form = document.querySelector('.form');

   const closePopupThanks = (e) => {
       if(e.target === popupThanksBody || e.target === close) {
         popupThanks.classList.remove('open');
         body.style.overflow = '';
         body.style.paddingRight = '';
         popupThanks.removeEventListener('click',closePopupThanks);
      }
   }
   form.addEventListener('submit', formSend)
   function formSend(e) {
       e.preventDefault();
       popupThanks.classList.add('open');
       inputs.forEach(item => {
         if(!item.matches('[type="submit"]')) {
         item.value = "";
           }
       })
       popup.classList.remove('open');
       body.style.overflow = 'hidden';
       body.style.paddingRight = paddingValue;
       popupThanks.addEventListener('click',closePopupThanks);
   };
}
popupThanksWindow();
}