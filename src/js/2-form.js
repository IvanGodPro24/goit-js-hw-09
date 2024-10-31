const feedbackForm = document.querySelector('#form');
const feedbackInputEmail = document.querySelector('#input-email');
const feedbackInputTextarea = document.querySelector('#input-textarea');
const localStorageKey = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

feedbackForm.addEventListener('input', readInput);

feedbackForm.addEventListener('submit', submitInput);

function readInput() {
  formData.email = feedbackInputEmail.value.trim();
  formData.message = feedbackInputTextarea.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

const object = JSON.parse(localStorage.getItem(localStorageKey));

feedbackInputEmail.value = object.email;
feedbackInputTextarea.value = object.message;

function submitInput(event) {
    event.preventDefault();
    
    if (formData.email.trim() === '' || formData.message.trim() === '') {
      alert('Fill please all fields');
    } else {
        console.log(formData);
        localStorage.removeItem(localStorageKey);
        feedbackForm.reset();
    }
}
