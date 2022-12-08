if(document.querySelector('.portfolio')) {
let tab = function() {
    let tabNav = document.querySelectorAll('.portfolio__tab'),
        tabContent = document.querySelectorAll('.portfolio__items-wrapper'),
        tabName;
        tabNav.forEach(item => {
          item.addEventListener('click', selectTabNav)
        });
  
      function selectTabNav() {
         tabNav.forEach(item => {
          item.classList.remove('active');
          let elem = document.querySelectorAll('.portfolio__items-inner:nth-of-type(2)');
          elem.forEach(item => {
            item.classList.remove('active')
          })
          this.classList.add('active');
          tabName = this.getAttribute('data-tab-name');
          selectTabContent(tabName);
         })
      };
  
  function selectTabContent(tabName) {
      tabContent.forEach(item => {
        item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
      })
    }
  };
  
  tab();
}
  /////////////////////////////////////////////////////////////////////////////////////////////////
  if(document.querySelector('.portfolio')) {
  let click = function() {
    let button = document.querySelector('.portfolio__button');
    let elem = document.querySelectorAll('.portfolio__items-inner:nth-of-type(2)');
    button.addEventListener('click',() => {
       elem.forEach(item => {
        if(item.matches('.portfolio__items-inner:nth-of-type(2)')) {
        item.classList.toggle('active')
       }
      })
    })
    }
    click();
  }
