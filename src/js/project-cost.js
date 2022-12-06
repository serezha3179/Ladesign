/*if(document.querySelector('.project-cost')) {
    
let buttonMain = document.querySelector('.project-cost__item-button_main');
let itemsText = document.querySelectorAll('.project-cost__item-text');
let itemText = document.querySelector('.project-cost__item-text');
let itemWrapper = document.querySelector('.project-cost__wrapper');
let textWrap = document.querySelectorAll('.project-cost__item-wrapper')

let mediaQuery = window.matchMedia('(max-width: 992px)');
  mediaQuery.addEventListener('change', changes);
  changes(mediaQuery);
 
 function changes(mediaQuery) {
   if(mediaQuery.matches){
     document.querySelectorAll('.project-cost__item-text').forEach(item => {
        item.style.height = null;
        item.style.marginTop = '';
    })
    }
     else {
       document.querySelectorAll('.project-cost__item-text').forEach(item => {
        item.style.height = null;
        item.style.marginTop = ''
    })
     }
   }
   
  if(mediaQuery.matches) { 
    document.querySelectorAll('.project-cost__item-text').forEach(item => {
    })
    itemWrapper.addEventListener('click',(e) => {
        let target = e.target;
        let item = target.parentNode ;

       if(target.matches('.project-cost__item-button_bottom')) {
            
            if(!item.classList.contains('active')) {
            document.querySelectorAll('.project-cost__item').forEach(item => {
                item.classList.remove('active');
                
                let height = item.querySelector('.project-cost__item-wrapper');
                height.style.height = null;
                height.style.marginTop = ''
            })
            item.classList.add('active');
            target.innerHTML = 'свернуть'
            } else {
                item.classList.remove('active');
                target.innerHTML = 'развернуть'
            }
            let submenu = item.querySelector('.project-cost__item-wrapper'); 
            let wrapInner = item.querySelector('.project-cost__item-inner'); 
            if (submenu.style.height) {
              submenu.style.height = null;
              submenu.style.marginTop = '';
              wrapInner.style.paddingBottom = '0px';
              
            } else {
              submenu.style.height = submenu.scrollHeight + "px";
              submenu.style.marginTop = '30px';
              wrapInner.style.paddingBottom = '0px';
            } 
        }
        })
    }
    buttonMain.addEventListener('click',(e) => {
        itemsText.forEach(item => {
            let target = e.target;
               let submenu = item
                if (submenu.style.height) {
                  submenu.style.height = null;
                  submenu.style.marginTop = '';
                  submenu.style.paddinTop = '30px'
                  target.innerHTML = 'развернуть'
                  
                } else {
                  submenu.style.height = submenu.scrollHeight + "px";
                  submenu.style.marginTop = '30px';
                  submenu.style.paddinTop = '';
                  target.innerHTML = 'cвернуть';
                }
        })
    })
        
}
*/

if (document.querySelector(".project-cost")) {
  let buttonMain = document.querySelector(".project-cost__item-button_main");
  let buttonBottom = document.querySelectorAll(
    ".project-cost__item-button_bottom"
  );
  let itemsText = document.querySelectorAll(".project-cost__item-text");
  let itemText = document.querySelector(".project-cost__item-text");
  let itemWrapper = document.querySelector(".project-cost__wrapper");
  let textWrap = document.querySelectorAll(".project-cost__item-wrapper");

  let mediaQuery = window.matchMedia("(max-width: 992px)");
  mediaQuery.addEventListener("change", changes);
  changes(mediaQuery);

  function changes(mediaQuery) {
    if (mediaQuery.matches) {
      document.querySelectorAll(".project-cost__item-text").forEach((item) => {
        item.style.height = null;
        item.style.marginTop = "";
      });
    } else {
      document.querySelectorAll(".project-cost__item-text").forEach((item) => {
        item.style.height = null;
        item.style.marginTop = "";
      });
    }
  }

  if (mediaQuery.matches) {
    document.querySelectorAll(".project-cost__item-text").forEach((item) => {});
  }
  itemWrapper.addEventListener("click", (e) => {
    let target = e.target;
    let elem = target.parentNode;
    if(target.matches('.project-cost__item-button_bottom')) {
    if (!elem.classList.contains("active")) {
      document.querySelectorAll(".project-cost__item").forEach((item) => {
        item.classList.remove("active");
        let el = item.querySelector(".project-cost__item-text");
        el.style.height = null;
        el.style.marginTop = "";
        el.style.paddinTop = "30px";
        target.innerHTML = "развернуть";
      });
      elem.classList.add("active");
    } else {
      elem.classList.remove("active");
    }
    let submenu = elem.querySelector(".project-cost__item-text");
    if (submenu.style.height) {
      submenu.style.height = null;
      target.innerHTML = "развернуть";
    } else {
      submenu.style.height = submenu.scrollHeight + "px";
      target.innerHTML = "cвернуть";
    }
  }

  });

  buttonMain.addEventListener("click", (e) => {
    let target = e.target;
    target.classList.toggle('active')
    itemsText.forEach((item) => {
      let submenu = item;
      if (submenu.style.height) {
        submenu.style.height = null;
        submenu.style.marginTop = "";
        submenu.style.paddinTop = "30px";
        target.innerHTML = "развернуть";
      } else {
        submenu.style.height = submenu.scrollHeight + "px";
        // submenu.style.height = "100%";
        submenu.style.marginTop = "30px";
        submenu.style.marginBottom = "auto";
        submenu.style.paddinTop = "";
        target.innerHTML = "cвернуть";
      }
    });
  });
}
