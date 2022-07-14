const inputRange = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');
// console.log(inputRange);
// console.log(textSpan);

inputRange.addEventListener('input', handlerControlRangeInput);

function handlerControlRangeInput(event) {
    // textSpan.style.color = 'red'
    // console.log(event.currentTarget.value); // число - нужна строка и пиксели
    textSpan.style.fontSize = String(event.currentTarget.value) + "px";
}

