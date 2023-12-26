const modals = document.querySelectorAll(".modal");

modals.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    const canClose = event.target.classList.contains("close");
    if (canClose) event.currentTarget.classList.remove("active");
  });
});
