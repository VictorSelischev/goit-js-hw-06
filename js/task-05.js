const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

const SPAN = span.textContent;

input.addEventListener('input', handlerChangeSpanInput);



function handlerChangeSpanInput(event) {
    span.textContent = event.currentTarget.value;

    if (event.currentTarget.value === '') {
    span.textContent = SPAN;  
    }
    
    // console.log(event.currentTarget.value);
};

// console.log(input);
// console.log(span);

