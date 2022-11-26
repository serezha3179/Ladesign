// let tabs = document.querySelectorAll('.portfolio__tabs');console.log(tabs)
let tabs = document.querySelector('.portfolio__tabs');
// console.log(tabs);
    tabs.addEventListener('click', (e) => { 
      e.preventDefault();
        let target = e.target;
      if (target.classList.contains('portfolio__tab')) {
        let tabss = document.querySelectorAll('.portfolio__tab');
        // console.log(tabss);
        tabss.forEach(item => {
            item.classList.remove('active')
        })
        target.classList.add('active')
      }
      // else { console.log('aaaa')}
    });