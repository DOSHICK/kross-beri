const cardsList = document.querySelectorAll('.cards .card')

function changeCounterValue(outputBlock, action){

    let outputValue = Number(outputBlock.textContent) 

    if(Number.isNaN(outputValue) === true){
        console.log('something went wrong')
    }

    switch (action) {
        case 'decrement':
            if(outputValue !== 0){
                outputValue--

                outputBlock.textContent = outputValue
            }

            break;
        case 'increment':
            if(outputValue !== 20){
                outputValue++

                outputBlock.textContent = outputValue
            }

            break;
    }
}


cardsList.forEach(card =>{
    let minusBtn = card.querySelector('.add-to-cart__minus')
    let counter = card.querySelector('.add-to-cart__counter')
    let plusBtn = card.querySelector('.add-to-cart__plus')

    minusBtn.onclick = () =>{
        changeCounterValue(counter, 'decrement')
    }
    plusBtn.onclick = () =>{
        changeCounterValue(counter, 'increment')
    }
})