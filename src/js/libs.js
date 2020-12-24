import { createClient } from 'pexels';
import template from '../templates/item.hbs';
import refs from './refs.js';
let key = '563492ad6f91700001000001202dc00e1ae849d7bf41fce381ba77a1';

const client = createClient(key);
console.log(client);

client.photos.search({ query, per_page: 10 }).then(result => {
  console.log(result.photos);
  const items = template(result.photos);
  refs.gallery.insertAdjacentHTML('afterbegin', items);
});

// =============
// const img = document.createElement('img');
// img.width = '300';
// refs.gallery.append(img);
// client.photos.random().then(obj => {
//   console.log(obj);
//   img.src = obj.src.original;
// });

// let query = 'lotus';
// client.photos
//   .search({ query, per_page: 10 })
//   .then(result => {
//     console.log(result.photos);
//     const images = result.photos.map(el => {
//       img.src = el.src.original;
//       return img;
//     });

//     return images;
//   })
//   .then(images => {
//     refs.gallery.append(...images);
//     return refs.gallery;
// });
