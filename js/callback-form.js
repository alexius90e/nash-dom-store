const callbackForms = document.querySelectorAll(".callback__form");

callbackForms.forEach((callbackForm) => {
  callbackForm.addEventListener("submit", (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    const modalSuccess = document.querySelector(".modal-callback-success");
    const modalError = document.querySelector(".modal-callback-error");

    const random = Math.random();
    const examplePromise = random <= 0.5 ? Promise.resolve() : Promise.reject();

    examplePromise
      .then(() => {
        if (modalSuccess) modalSuccess.classList.add("active");
      })
      .catch(() => {
        if (modalError) modalError.classList.add("active");
      });
  });
});
