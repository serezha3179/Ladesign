/* 
let button = document.querySelector('.portfolio__button');
// console.log(button);
let toggle = document.querySelectorAll('.portfolio__items-wrapper');
button.addEventListener('click', () => {
    // console.log(toggle)
    for(let i = 0, length = toggle.length - 1; i < length; i++) {
        // console.log(length)
        if(toggle[1].classList.contains('active')) {
            toggle[1].classList.remove('active');
            console.log('aaaa')
        } else {
            toggle[1].classList.add('active');
            console.log('bbbbb')
        }
    }
})*/
let button = document.querySelector('.portfolio__button');
let elem = document.querySelectorAll('.portfolio__items-inner:nth-of-type(2)');
button.addEventListener('click',(e) => {
   elem.forEach(item => {
    if(item.matches('.portfolio__items-inner:nth-of-type(2)')) {
    item.classList.toggle('active')
   }
})
})