window.addEventListener('DOMContentLoaded', () => {

const animItems = document.querySelectorAll('.is-animate');

window.addEventListener('scroll',animOnScroll)
function offset(el) {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
     return {top: rect.top + scrollTop,left: rect.left + scrollLeft}
}
function animOnScroll() {
        for(let i = 0; animItems.length > i; i++) {
        const animItem = animItems[i];
        const animItemHeight = animItem.offsetHeight;
        const animStart = 6;

        let animItemPoint = window.innerHeight - animItemHeight /  animStart;
        if(animItemHeight> window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }
        if(scrollY > offset(animItem).top - animItemPoint && scrollY < (offset(animItem).top + animItemHeight)) {
            animItem.classList.add('animate')
        }

        // if(offset(animItem).top - window.innerHeight + 100 - scrollY < 0) {
        //     animItem.classList.add('animate');
        // } else {}

    }
}
animOnScroll();
})