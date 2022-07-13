const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');
console.log(list);



const arrayList = ingredients
  .map(el => {
  const item = document.createElement('li');
  item.textContent = el;
  item.classList.add('item');
  return item;
})
  
list.append(...arrayList);



// const textHTML = ingredients
//   .map(el => {
//   const item = document.createElement('li');
//   item.textContent = el;
//   item.classList.add('item');
//   return item.outerHTML;
// })
//   .join('');

// list.innerHTML = textHTML;




