const cabinetSecurityForm = document.querySelector('#cabinetSecurityForm');

if (cabinetSecurityForm) {
  cabinetSecurityForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const modalSecurity = document.querySelector('.modal-security');
    if (modalSecurity) modalSecurity.classList.add('active');
  });
}

function initCabinetOrder() {
  console.log('initCabinetOrder');

  const cabinetOrder = document.querySelector('.cabinet-order');

  if (cabinetOrder) {
    const orderCards = cabinetOrder.querySelectorAll('.cabinet-order__card');
    const orderData = [...orderCards].map((card) => {
      const priceElem = card.querySelector('.cabinet-order__card-details-price');
      const quantityElem = card.querySelector('.cabinet-order__card-details-quantity');
      const totalElem = card.querySelector('.cabinet-order__card-total');

      if (priceElem && quantityElem && totalElem) {
        const price = Number(priceElem.innerText.split(' ')[0]);
        const quantity = Number(quantityElem.innerText.split(' ')[0]);
        totalElem.innerHTML = `${price * quantity}₽`;
        return { price, quantity };
      } else {
        return { price: 0, quantity: 0 };
      }
    });
    const orderQuantityElem = cabinetOrder.querySelector('.cabinet-order__quantity-value');
    orderQuantityElem.innerText = orderData.reduce((accum, item) => accum + item.quantity, 0);
    const orderTotalCostElem = cabinetOrder.querySelector('.cabinet-order__total-cost-value');
    orderTotalCostElem.innerText = orderData.reduce(
      (accum, item) => accum + item.price * item.quantity,
      0
    );
  }
}

initCabinetOrder();
