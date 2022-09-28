import throttle from 'lodash.throttle';
import { save, load, remove } from './storage';
const formsRef = document.querySelector('.feedback-form');
const LOKALE_STORAGE_KEY = 'feedback-form-state';

initPage();
const OnFormInput = event => {
  const { name, value } = event.target;

  let saveData = load(LOKALE_STORAGE_KEY);
  saveData = saveData ? saveData : {};
  saveData[name] = value;
  save(LOKALE_STORAGE_KEY, saveData);
};
const throttledOnFormInput = throttle(OnFormInput, 500);
formsRef.addEventListener('input', throttledOnFormInput);

function initPage() {
  const saveData = load(LOKALE_STORAGE_KEY);
  if (!saveData) {
    return;
  }
  Object.entries(saveData).forEach(([name, value]) => {
    formsRef.elements[name].value = value;
  });
}

const handleSubmit = event => {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;

  console.log({ email: email.value, message: message.value });
  event.currentTarget.reset();
  remove(LOKALE_STORAGE_KEY);
};
formsRef.addEventListener('submit', handleSubmit);
