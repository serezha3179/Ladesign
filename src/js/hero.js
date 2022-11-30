let hero = document.querySelector('.hero');
if(hero) {
let headerHeight = document.querySelector('.header').clientHeight;
let link = document.querySelector('.hero__link');
let heroHeight = document.querySelector('.hero').clientHeight;
link.addEventListener('click',function(e) {
    e.preventDefault();
    window.scrollTo({
        top: heroHeight - headerHeight,
        behavior: 'smooth'
    })
  })
}