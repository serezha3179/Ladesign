let anchor = document.querySelector('#anchor');
let link = document.querySelector('.hero__link');
link.addEventListener('click',function(e) {
    e.preventDefault();
    anchor.scrollIntoView({block: "start", behavior: "smooth"});
})