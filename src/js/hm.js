// import throttle from 'lodash.throttle';
// const refs = {
//   form: document.querySelector('.feedback-form'),
//   textarea: document.querySelector('.feedback-form textarea'),
// };
// const STORAGE_KEY = 'feefback-msg';
// const formData = {};
// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 200));

// populateTextArea();
// // відміняємо значення браузера по замовчанню(оновлення сторінки після введення)
// // забираємо значення з локального сховища
// // очищуємо форму

// function onFormSubmit(evt) {
//   evt.preventDefault();
//   console.log('відправити форму');
//   evt.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// // получаємо значення поля
// // зберігаємо значення в локальну пам'ять
// // можна добавити throttle щоб не відстежувалося введення кожного значення

// function onTextareaInput(evt) {
//   const messege = evt.target.value;
//   localStorage.setItem(STORAGE_KEY, messege);
// }
// // получаємо значення зі сховища
// // якщо там були значення, оновлюємо DOM
// function populateTextArea() {
//   const saveMessage = localStorage.getItem(STORAGE_KEY);
//   if (saveMessage) {
//     console.log(saveMessage);
//     refs.textarea.value = saveMessage;
//   }
// }

