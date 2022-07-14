const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];




// const body = document.querySelector('body');
const list = document.querySelector('ul');


// body.classList.add('container');

list.classList.add('list');
list.classList.add('flex');
console.log(list);

const textHTML = images
  .map(({ url, alt }) => {

    // const item = document.createElement('li');
    // console.log(item);

    // const image = document.createElement('img');
    // image.url = url;
    // image.alt = alt;
    // console.log(image);

    const item = `<li class="item"><img src="${url}" alt="${alt}"></li>`;

    // item.append(image);

    return item;
  })
  .join('');

console.log(textHTML);

list.insertAdjacentHTML("afterbegin", textHTML);


