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
