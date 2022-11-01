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

const checkEmailTLD = function (email) {
  // Receives a string containing an email address and returns true or false
  // based on the presence of a top-level domain after the @.
  // It's a simple check: it checks if there is at least one character
  // after the @, followed by a dot with at least two characters after it.
  // This is required because the Constraint Validation API regards dotless
  // domains as valid (and they are in some cases, but not for the purposes
  // of this project).
  const TLDRegExp = new RegExp('@.+?\\..{2,}');
  return TLDRegExp.test(email);
};

formElement.addEventListener('submit', (event) => {
  const emailIsValid = emailInputElement.checkValidity();
  const emailHasTLD = checkEmailTLD(emailInputElement.value);

  if (emailIsValid && emailHasTLD) {
    clearErrorMessage();
    emailInputElement.removeAttribute('aria-invalid');
  } else {
    clearErrorMessage();
    showErrorMessage();
    playErrorAnimation();
    emailInputElement.setAttribute('aria-invalid', '');
    emailInputElement.focus();
    event.preventDefault();
  }
});
