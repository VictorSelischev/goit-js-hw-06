let counterValue = 0;

const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');
const counter = document.querySelector('#value');


function handleDecrementButtonClick() {
    counterValue -= 1;
    counter.textContent = counterValue;
    console.log(counterValue);
    // return counterValue;
}

function handleIncrementButtonClick() {
    counterValue += 1;
    counter.textContent = counterValue;
    console.log(counterValue);
    // return counterValue;
}


decBtn.addEventListener('click', handleDecrementButtonClick);
incBtn.addEventListener('click', handleIncrementButtonClick);