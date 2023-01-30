
const header = document.querySelector('.header')
const body = document.querySelector('body');
const headerBurger = document.querySelector('.header__burger');
window.addEventListener('scroll', function() {
  if(header.classList.contains('js-header-main')) {
    if (this.scrollY > 0) {
        this.document.querySelector('.header').classList.add('scroll');
    }
    else {
        this.document.querySelector('.header').classList.remove('scroll')
    }
  }
  });
  if(window.scrollY > 0) {
    header.classList.add('scroll');
  }
headerBurger.addEventListener('click',() => {
  headerBurger.classList.toggle('active');
  header.classList.toggle('active');
  body.classList.toggle('lock')
})