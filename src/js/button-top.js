let body = document.querySelector('body');
let buttonTop = document.querySelector('.button-top');
if(body) {
    window.addEventListener('scroll', ()=> {
        if(scrollY > 0) {
    buttonTop.classList.add('scroll')
   } else {
    buttonTop.classList.remove('scroll')
   }
    })
   buttonTop.addEventListener('click', ()=> {
    body.scrollIntoView({block: "start", behavior: "smooth"})
   })
}