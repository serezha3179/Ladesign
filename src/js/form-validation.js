document.addEventListener('DOMContentLoaded', function(){
    if(document.querySelector('.contacts-form')) {
    const form = document.querySelector('.contacts-form');
    const inputs = document.querySelectorAll('.contacts-form__input[type="text"],.contacts-form__input[type="email"]');
    const inputFile = document.querySelector('input[type="file"]');
    const inputFileList = document.querySelector('.input-file-list');

    function popupThanksWindow() {
        const popupThanks = document.querySelector('.popup-thanks');
        const close = document.querySelector('.popup-thanks__close img');
        let paddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + "px";
        const popupThanksBody = document.querySelector('.popup-thanks__body');
        const body = document.querySelector('body');
        popupThanks.addEventListener('click', (e) => {
            if(e.target === popupThanksBody || e.target === close) {
              popupThanks.classList.remove('open');
              body.style.overflow = '';
              body.style.paddingRight = '';
           }
        })
            popupThanks.classList.add('open');
            body.style.overflow = 'hidden';
            body.style.paddingRight = paddingValue;
    }

    inputs.forEach(item => {
        item.addEventListener('focusout',()=>{
            let inputLength = item.value.length;
            if(inputLength > 0) {
            item.parentElement.classList.add('active');
            } else {
                item.parentElement.classList.remove('active')
            }
        })
    })

    form.addEventListener('submit', formSend);
    function formSend(e) {
      e.preventDefault();

      let error = formValidate(form);
      if(error === 0) {
        popupThanksWindow();
        inputs.forEach(item => {
            item.value = '';
            item.parentElement.classList.remove('active')
        })
        inputFileList.textContent = '';
      }
    }
    function formValidate(form) {
        let error = 0;
        removeGenerateError()
        let required = document.querySelectorAll('.required');
        for(let index = 0; index<required.length; index++) {
            const input = required[index];
            formRemoveError(input);
            if(input.classList.contains('email')) {
               if(emailText(input)) {
                formAddError(input);
                error++;
               }
            } else {
                if(input.value === '') {
                    formAddError(input,'Поле обязательно для ввода');
                    error++;
                }
            }
        }
        return error
    }
    function formAddError(input) {
         input.parentElement.classList.add('error');
         input.classList.add('error');
         let err = generateError('Поле обязательно для ввода')
         input.after(err)
    }
    function generateError(text) {
        let err = document.createElement('div');
        err.className = 'err';
        err.style.position = 'absolute';
        err.style.top = '26px'
        err.style.left = '0px'
        err.style.color = 'red';
        err.style.fontSize = '13px';
        err.textContent = text;
        return err
    }
    function removeGenerateError() {
        let errors = document.querySelectorAll('.err')
        for(let i = 0; i<errors.length; i++) {
            errors[i].remove();
        }
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('error');
         input.classList.remove('error')
    }
    function emailText(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
    }
    inputFile.addEventListener('change', () => {
        inputFileList.textContent = "";
        let curFile = inputFile.files;
        inputFileList.textContent = curFile[0].name;
    })
 }
})