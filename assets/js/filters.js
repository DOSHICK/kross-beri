const triggersList = document.querySelectorAll('.filters__modal-trigger.filters__modal-trigger_select')

triggersList.forEach(trigger =>{
    let select = trigger.querySelector('select')
    let optionsList = trigger.querySelectorAll('.filters__body-content button')
    let triggerBody = trigger.querySelector('.filters__modal-body')

    optionsList.forEach(option => {
        option.onclick = () =>{
            let activeOption =  trigger.querySelector('.filters__body-content button.active')

            

            if(activeOption === null){
                option.classList.add('active')
            }else{
                activeOption.classList.remove('active')
                option.classList.add('active')
            }
            select.value = option.getAttribute('value')
            select.setAttribute('value', option.getAttribute('value'))

            triggerBody.setAttribute('style', 'display: none')
            setTimeout(() => {
                triggerBody.removeAttribute('style')

            }, 500);
        }
    });

})


const triggerSort = document.querySelector('.filters__modal-trigger.filters__sort-wrapper')

triggerSort.onclick = () =>{

    let select = triggerSort.querySelector('select')
    let optionsList = triggerSort.querySelectorAll('.filters__body-content button')
    let triggerBody = triggerSort.querySelector('.filters__modal-body')

    optionsList.forEach(option => {
        option.onclick = () =>{
            let activeOption =  triggerSort.querySelector('.filters__body-content button.active')

            if(activeOption === null){
                option.classList.add('active')
            }else{
                activeOption.classList.remove('active')
                option.classList.add('active')
            }
            select.value = option.getAttribute('value')
            select.setAttribute('value', option.getAttribute('value'))

            triggerBody.setAttribute('style', 'display: none')
            setTimeout(() => {
                triggerBody.removeAttribute('style')

            }, 500);
        }
    });

}

const triggerPrice = document.querySelector('.filters__modal-trigger.filters__modal-trigger_price')
triggerPrice.onclick = () =>{
    let submitBtn = triggerPrice.querySelector('.filters__submit')
    let triggerBody = triggerPrice.querySelector('.filters__modal-body')

    submitBtn.onclick = () =>{
            triggerBody.setAttribute('style', 'display: none')

            setTimeout(() => {
                triggerBody.removeAttribute('style')
            }, 500);
        }
}

