const basketCards = document.querySelectorAll(".basket-card");

const basketClearButtons = document.querySelectorAll(".basket__buttons-clear-button");

basketClearButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const basketCards = document.querySelectorAll(".basket-card");
    basketCards.forEach((card) => card.remove());
    updatePrices();
  });
});

basketCards.forEach((basketCard) => {
  basketCard.addEventListener("click", (event) => {
    const deleteBtn = event.currentTarget.querySelector(".basket-card__button-delete");
    const minusBtn = event.currentTarget.querySelector(".basket-card__prices-counter-minus");
    const plusBtn = event.currentTarget.querySelector(".basket-card__prices-counter-plus");
    const quantityElem = event.currentTarget.querySelector(".basket-card__prices-counter-quantity");

    if (event.target.parentNode === deleteBtn || event.target === deleteBtn) {
      basketCard.remove();
    } else if (event.target === minusBtn) {
      if (Number(quantityElem.innerText) <= 1) return;
      quantityElem.innerText = Number(quantityElem.innerText) - 1;
    } else if (event.target === plusBtn) {
      quantityElem.innerText = Number(quantityElem.innerText) + 1;
    } else {
      return;
    }

    updatePrices();
  });
});

function updatePrices() {
  const basketCards = [...document.querySelectorAll(".basket-card")];
  const basketTitieTotalQuantityElem = document.querySelector(".basket__title-goods-count");
  const basketTotalQuantityElem = document.querySelector(".basket__checkout-item-data-quantity");
  const basketTotalPriceFullElem = document.querySelector(".basket__checkout-item-data-price");
  const basketTotalDiscountElem = document.querySelector(".basket__checkout-item-data-discount");
  const basketTotalPriceResultElem = document.querySelector(".basket__checkout-item-data-total");

  const prices = basketCards.map((basketCard) => {
    const cardQuantityElem = basketCard.querySelector(".basket-card__prices-counter-quantity");
    const cardNewPriceElem = basketCard.querySelector(".basket-card__prices-price-new-value");
    const cardOldPriceElem = basketCard.querySelector(".basket-card__prices-price-old-value");
    const cardNewTotalPriceElem = basketCard.querySelector(
      ".basket-card__prices-total-price_new .basket-card__prices-total-price-value"
    );
    const cardOldTotalPriceElem = basketCard.querySelector(
      ".basket-card__prices-total-price_old .basket-card__prices-total-price-value"
    );

    const quantity = Number(cardQuantityElem.innerText);
    const newPrice = Number(cardNewPriceElem.innerText);
    const oldPrice = cardOldPriceElem ? Number(cardOldPriceElem.innerText) : newPrice;
    const newTotalPrice = newPrice * quantity;
    const oldTotalPrice = oldPrice * quantity;

    if (newPrice === oldPrice) cardOldTotalPriceElem.parentNode.style.display = "none";

    cardNewTotalPriceElem.innerText = newTotalPrice;
    cardOldTotalPriceElem.innerText = oldTotalPrice;

    return { quantity, newPrice, oldPrice };
  });

  const totalPriceFull = prices.reduce(
    (acc, priceItem) => acc + priceItem.oldPrice * priceItem.quantity,
    0
  );

  const totalPriceResult = prices.reduce(
    (acc, priceItem) => acc + priceItem.newPrice * priceItem.quantity,
    0
  );

  const totalQuantity = prices.reduce((acc, priceItem) => acc + priceItem.quantity, 0);

  const totalDiscount = totalPriceResult - totalPriceFull;

  basketTitieTotalQuantityElem.innerText = totalQuantity;
  basketTotalQuantityElem.innerText = totalQuantity;
  basketTotalPriceFullElem.innerText = totalPriceFull;
  basketTotalDiscountElem.innerText = totalDiscount;
  basketTotalPriceResultElem.innerText = totalPriceResult;
}

updatePrices();
