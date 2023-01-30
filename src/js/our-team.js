if(document.querySelector('.our-team')) {
const items = document.querySelectorAll('.our-team__item');
items.forEach(item => {
    item.addEventListener('click',()=>{
        if(item.classList.contains('active')!=true) {
            items.forEach(item => {
                item.classList.remove('active');
                let itemsText = item.querySelectorAll('.our-team__item-text') 
                itemsText.forEach(item => {
                    item.style.maxHeight = null;
                })
            })
            item.classList.add('active');
        }else {
                item.classList.remove('active')
            }
            let itemText = item.querySelector('.our-team__item-text');
            if(itemText) {
        if (itemText.style.maxHeight) {
          itemText.style.maxHeight = null;
        } else {
          itemText.style.maxHeight = itemText.scrollHeight + "px";
          }
        }
    })
})
}   