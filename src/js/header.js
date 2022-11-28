
let header = document.querySelector('.header')
let body = document.querySelector('body');
window.addEventListener('scroll', function() {
    if (this.scrollY > 10) {
        this.document.querySelector('.header').classList.add('active');
    }
    else {
        this.document.querySelector('.header').classList.remove('active')
        // body.style.paddingTop = "";
    }
  });
  if(window.pageYOffset > 10) {

    header.classList.add('active');
    
  }