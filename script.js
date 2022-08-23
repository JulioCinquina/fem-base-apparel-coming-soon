'use strict';

const formElement = document.querySelector('.form');
const errorMessageElement = document.querySelector('.form__error-message');
const emailInputElement = document.querySelector('.form__input');
const buttonElement = document.querySelector('.form__button');

const showErrorMessage = function () {
  errorMessageElement.textContent = 'Please provide a valid email';
};

const clearErrorMessage = function () {
  errorMessageElement.textContent = '';
};

const playErrorAnimation = function () {
  // Adds animation classes
  emailInputElement.classList.add('form__input--error-animation');
  buttonElement.classList.add('form__button--error-animation');

  // Removes classes when the animation ends
  emailInputElement.addEventListener(
    'animationend',
    () => {
      emailInputElement.classList.remove('form__input--error-animation');
      buttonElement.classList.remove('form__button--error-animation');
    },
    { once: true }
  );
};

buttonElement.addEventListener('click', (event) => {
  const emailIsValid = emailInputElement.checkValidity();

  if (!emailIsValid) {
    clearErrorMessage();
    showErrorMessage();
    playErrorAnimation();
    event.preventDefault();
  } else {
    clearErrorMessage();
  }
});
