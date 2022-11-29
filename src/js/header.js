
let header = document.querySelector('.header')
let body = document.querySelector('body');
let headerBurger = document.querySelector('.header__burger');
window.addEventListener('scroll', function() {
    if (this.scrollY > 10) {
        this.document.querySelector('.header').classList.add('scroll');
    }
    else {
        this.document.querySelector('.header').classList.remove('scroll')
        // body.style.paddingTop = "";
    }
  });
  if(window.pageYOffset > 10) {

    header.classList.add('scroll');
    
  }
headerBurger.addEventListener('click',() => {
  headerBurger.classList.toggle('active');
  header.classList.toggle('active');
  body.classList.toggle('lock')
})