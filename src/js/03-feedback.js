const throttle = require('lodash.throttle');
// console.log(throttle);

const formRef = document.querySelector('.feedback-form');
// console.log(formRef);

formRef.addEventListener('input', throttle(onInput, 500));
formRef.addEventListener('submit', onFormSubmit);

let formData = {
  email: '',
  message: '',
};

function onInput(e) {
  if (e.target.name === 'email') {
    formData.email = e.target.value;
    // console.log(formRef.elements.message.value);
    // formData.message = formRef.elements.message.value;
  } else if (e.target.name === 'message') {
    formData.message = e.target.value;
    // formData.email = formRef.elements.email.value;
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(formData ?? {}));
}

function onFormSubmit(e) {
  e.preventDefault();

  if (!formRef.elements.email.value || !formRef.elements.message.value) {
    alert('Заповніть всі поля!');
    return;
  }
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
  e.currentTarget.reset();
}

(function addLocalStorage() {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (!savedData) {
    return;
  }
  formRef.elements.email.value = savedData.email;
  formRef.elements.message.value = savedData.message;
})();
