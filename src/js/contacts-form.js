let inputs = document.querySelectorAll('.contacts-form__input');console.log(inputs)
inputs.forEach(item => {
    console.log(item)
    if(!item.matches('.contacts-form__input[type="file"]'))
    item.addEventListener('focusout',()=>{
        let inputLength = item.value.length;
        if(inputLength > 0) {
        item.parentElement.classList.add('active');
        } else {
            item.parentElement.classList.remove('active')
        }
    })
})