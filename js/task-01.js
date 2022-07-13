const amountCategories = document.querySelectorAll('.item');
console.log('Number of categories: ', amountCategories.length);

console.log(amountCategories);


amountCategories.forEach(el => {
    const h2 = el.querySelector('h2');
    const itemElAlls = el.querySelectorAll('li');

    console.log(h2.textContent);
    console.log('Elements: ', itemElAlls.length);
    console.log('');
});

