const authPasswordElems = document.querySelectorAll('.auth-form__input_password');

authPasswordElems.forEach((element) => {
  element.addEventListener('click', (event) => {
    const isElement = event.target === event.currentTarget;
    const input = element.querySelector('input');

    if (input && isElement) {
      if (input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text');
        element.classList.add('active');
      } else {
        input.setAttribute('type', 'password');
        element.classList.remove('active');
      }
    }
  });
});

const registerForm = document.querySelector('.register .auth-form');
const registerFormSubmitBtn = document.querySelector('.auth-form__submit');


if (registerForm && registerFormSubmitBtn) {
  const formInputs = registerForm.querySelectorAll('.auth-form__input input');

  formInputs.forEach((input) => {
    input.addEventListener('change', () => {
      if (registerForm.checkValidity()) {
        registerFormSubmitBtn.disabled = false;
      } else {
        registerFormSubmitBtn.disabled = true;
      }
    });

    registerForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const modalRegister = document.querySelector('.modal-register');
      if (modalRegister) modalRegister.classList.add('active')
    });
  });
}
