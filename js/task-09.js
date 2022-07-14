function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const body = document.querySelector('body');
const btnChangeColor = document.querySelector('.change-color');
const span = document.querySelector('.color')

btnChangeColor.addEventListener('click', handleChangeColorBodyClick);

function handleChangeColorBodyClick(event) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
}

