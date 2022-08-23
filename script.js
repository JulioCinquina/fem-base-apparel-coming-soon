'use strict';

const errorMessageElement = document.querySelector('.form__error-message');
const emailInputElement = document.querySelector('.form__input');
const buttonElement = document.querySelector('.form__button');

const showErrorMessage = function () {
  errorMessageElement.textContent = 'Please provide a valid email';
};

const clearErrorMessage = function () {
  errorMessageElement.textContent = '';
};

buttonElement.addEventListener('click', (event) => {
  const emailIsValid = emailInputElement.checkValidity();

  if (!emailIsValid) {
    clearErrorMessage();
    showErrorMessage();
    event.preventDefault();
  } else {
    clearErrorMessage();
  }
});
