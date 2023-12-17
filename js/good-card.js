const goodcards = document.querySelectorAll(".good-card");

goodcards.forEach((goodcard) => {
  goodcard.addEventListener("click", (event) => {
    const target = event.target;
    const controls = event.currentTarget.querySelector(".good-card__controls");
    const counter = event.currentTarget.querySelector(".good-card__controls-count-quantity");
    const isBuyButton = target.classList.contains("good-card__controls-buy");
    const isMinusButton = target.classList.contains("good-card__controls-count-minus");
    const isPlusButton = target.classList.contains("good-card__controls-count-plus");
    if (isBuyButton) {
      controls.classList.add("active");
    } else if (isMinusButton) {
      if (Number(counter.innerText) <= 1) {
        counter.innerText = 1;
        controls.classList.remove("active");
      } else {
        counter.innerText = Number(counter.innerText) - 1;
      }
    } else if (isPlusButton) {
      counter.innerText = Number(counter.innerText) + 1;
    }
  });
});
