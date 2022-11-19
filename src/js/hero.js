let anchor = document.querySelector('#bottom');
let link = document.querySelector('.hero__link');
link.addEventListener('click',function(e) {
    e.preventDefault();
    anchor.scrollIntoView({block: "start", behavior: "smooth"});
})