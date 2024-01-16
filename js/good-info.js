const goodInfoButtonsElems = document.querySelectorAll(".good-info__info-buttons");

goodInfoButtonsElems.forEach((element) => {
  element.addEventListener("click", (event) => {
    const basketBtn = element.querySelector(".good-info__info-buttons-add");
    const minusBtn = element.querySelector(".good-info__info-buttons-count-minus");
    const plusBtn = element.querySelector(".good-info__info-buttons-count-plus");
    const counter = element.querySelector(".good-info__info-buttons-count-quantity");

    if (event.target === basketBtn) {
      const modal = document.querySelector('.modal-order')
      event.currentTarget.classList.add("active");
      modal.classList.add("active");
    } else if (event.target === minusBtn) {
      console.log("minus");
      const count = Number(counter.innerText);
      if (count === 1) event.currentTarget.classList.remove("active");
      if (count > 1) counter.innerText = count - 1;
    } else if (event.target === plusBtn) {
      console.log("plus");
      counter.innerText = Number(counter.innerText) + 1;
    }
  });
});
