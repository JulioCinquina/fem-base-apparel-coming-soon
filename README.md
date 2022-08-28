# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

This project features a **responsive layout** made in a **mobile-first workflow** with **Grid** and **media queries**. **JavaScript** is used to validate the form with the **Constraint Validation API**, display an error message and play an error animation.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Links

- [Solution on Frontend Mentor](https://www.frontendmentor.io/solutions/form-validation-with-constraint-validation-api-css-error-animation-Czkq91CVxn)
- [Live Site on GitHub Pages](https://juliocinquina.github.io/fem-base-apparel-coming-soon/)

### Screenshots

|                                Mobile                                 |     |                                 Desktop                                 |
| :-------------------------------------------------------------------: | :-: | :---------------------------------------------------------------------: |
| ![Mobile layout of the solution](./screenshots/screenshot-mobile.png) |     | ![Desktop layout of the solution](./screenshots/screenshot-desktop.png) |

## My process

### What I learned

In this project, I have practiced the following skills:

- Using **Grid** and **media queries** to create a **responsive layout**
- Using **JavaScript** for **client-side form validation** and **DOM manipulation**
- **Accessibility**: using the `aria-live` and `aria-invalid` attributes
- Creating **CSS animations**
- Using **pseudo-elements** for styling purposes
- Styling elements with **layered box-shadows**
- Using **semantic HTML markup**
- Using **CSS relative units** to ensure the page scales according to the user's font size settings
- Using **CSS custom properties** to allow easy customization and reusability of components
- Using **Git** and **GitHub**

---

#### HTML forms, user experience and accessibility

While working on this project, I researched how to make HTML forms that are accessible and that provide a good user experience. I must admit that I was a bit overwhelmed by how many aspects have to be considered, and my form in this solution might not be perfect, but these are some of the things that I learned and tried to implement:

1. Every input needs a label, and it is a good practice to give a _visible_ label to every input instead of using placeholder text as a label. However, since the form in this project only has a single field and the short paragraph before it clearly asks for an email address, I considered that a visible label directly above the field was not necessary, but I still included a visually-hidden label for accessibility purposes.
1. Messages should be displayed above the input field; otherwise, they could be hidden by a form autocompletion dropdown list or an on-screen keyboard.
1. A field with invalid data is clearly highlighted with a red border and error icon. If the user tries to submit invalid data, an error message is displayed and an error animation is played (unless reduced motion is preferred).
1. A field with invalid data is only highlighted after it loses focus, and not while the user types. This is done to not interrupt or distract the user while they enter their data.
1. The input field has an `aria-invalid="true"` attribute for invalid data to be announced to screen reader users.
1. The error message element has an `aria-live="polite"` attribute for error messages to be announced to screen reader users.
1. The email input field has an `autocomplete="email"` attribute to ensure its identification by autocompletion features and password managers.
1. Animations are disabled by a media query if the user prefers reduced motion.

#### Client-side form validation

<table align="center">
  <tr>
    <td align="center"><img src="./screenshots/form-validation.gif" alt="invalid email entered in input field, triggering an error animation and message"></td>
  </tr>
  <tr>
    <td align="center">Feedback when trying to submit invalid data: red outline and an error message, icon and animation.</td>
  </tr>
</table>

A field with invalid data is highlighted using the `:invalid` CSS pseudo-class. When submitting the form, the **Constraint Validation API** is used to verify the data. If invalid data is found, the form is not submitted, an error message is displayed to the user and an error animation is played.

Default field validation is disabled by the `novalidate` attribute. This was done because:

1. Browser error messages are displayed in the browser's language, which might be different than the language of the page, resulting in an inconsistent experience.
1. When testing with screen readers, I found that VoiceOver in iOS does not read the error messages of the browser entirely.
1. Currently, an e-mail address that is missing the domain extension (such as "hi@example") is considered valid, showing no error message.

Granted, the default error messages are more descriptive than the one implemented here, and the Constraint Validation API also regards an email without the domain extension as valid. However, the mentioned issues can be remediated by implementing a more thorough form validation logic with JavaScript.

### Continued development

In future projects, I want to continue learning how to create forms that are accessible, understandable and easy to use. When it comes to this project, I would like to rewrite its form validation logic to: 1) prevent emails without the domain extension from being regarded as valid, and 2) provide more descriptive error messages.

### Useful resources

- [_Client-side form validation_, MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - This is a comprehensive guide about client-side form validation, and it covers both built-in form validation (with HTML) and JavaScript form validation (with and without the Constraint Validation API).
- [_Form design: best practice, research insights and examples_, Geri Reid](https://gerireid.com/forms.html) - A set of guidelines for designing forms with accessibility and user experience in mind.
- [_Creating Accessible Forms: Accessible Form Controls_, WebAIM](https://webaim.org/techniques/forms/controls) - This article contains several examples of accessible form controls.
- [_Avoid Messages Under Fields_, Adrian Roselli](https://adrianroselli.com/2017/01/avoid-messages-under-fields.html) - In this post, Adrian Roselli shows how placing messages under form fields can be problematic.
- [_Avoid Default Field Validation_, Adrian Roselli](https://adrianroselli.com/2019/02/avoid-default-field-validation.html) - In this post, Adrian Roselli shows how the default field validation — in its current state — can present accessibility issues.
- [_More accessible markup with display: contents_, Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/) - This article shows how to use `display: contents` in CSS to turn the contents of an element inside a grid container into grid items, which I found very useful in this project.
- [_A powerful CSS display property that no one talks about_, Kevin Powell](https://www.youtube.com/watch?v=cs37yx73b1o) - This video by Kevin Powell also shows how `display: contents` work, how it can be used and its limitations.

## Author

- Frontend Mentor - [@JulioCinquina](https://www.frontendmentor.io/profile/JulioCinquina)
