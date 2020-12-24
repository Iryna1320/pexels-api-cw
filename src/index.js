import styles from './styles.css';
// import libs from './js/libs.js';
import fetchObject from './js/fetch.js';
import x from './js/refs.js';
// console.log(x.form);
const { form, searchBtn, gallery } = x; //деструктуризировали для получения доступа
// console.log(form, searchBtn, gallery);

form.addEventListener('submit', e => {
  e.preventDefault();
  // console.log(e);
  // console.log(e.target);
  // console.log(e.target.elements);
  // console.log(e.target.elements.query);
  const inputValue = e.target.elements.query.value;
  fetchObject.getFetch(inputValue, gallery);
});
