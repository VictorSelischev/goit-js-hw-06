const inputName = document.querySelector('#validation-input');
// console.log(inputName);

inputName.addEventListener('blur', handlerCounterLengthBlur);


function handlerCounterLengthBlur(event) {
    
    const inputDataLength = inputName.dataset.length; // строка
    const inputValue = event.currentTarget.value; // число
    // console.log(Number(inputDataLength));
    // console.log(inputValue.length);
    
    if (inputValue.length === Number(inputDataLength)) {
        inputName.classList.remove('invalid');
        inputName.classList.add('valid');
        return;
    }
    inputName.classList.remove('valid');
    inputName.classList.add('invalid');
    alert(`Please enter 6 symbols`);
}