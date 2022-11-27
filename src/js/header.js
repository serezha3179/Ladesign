

window.addEventListener('scroll', function() {
    if (this.scrollY > 10) {
        this.document.querySelector('.header').classList.add('active');
    }
    else {
        this.document.querySelector('.header').classList.remove('active')
    }
  });