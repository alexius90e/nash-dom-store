const order = {
  name: "",
  surname: "",
  phone: "",
  email: "",
  bonus: "",
  agreement: false,
  deliveryMethod: "self",
  city: "",
  street: "",
  house: "",
  building: "",
  room: "",
  comment: "",
  paymentMethod: "",
};

const orderInputs = document.querySelectorAll(".order__input");
const orderCheckboxes = document.querySelectorAll(".order__checkbox");
const orderDeliveryMethodSelect = document.querySelector("#orderDeliveryMethod");

[...orderInputs, ...orderCheckboxes].forEach((orderInput) => {
  orderInput.addEventListener("input", (event) => {
    const orderInputId = event.currentTarget.id;
    const orderInputValue = event.currentTarget.value;
    if (orderInputId === "orderName") order.name = orderInputValue;
    if (orderInputId === "orderSurname") order.surname = orderInputValue;
    if (orderInputId === "orderPhone") order.phone = orderInputValue;
    if (orderInputId === "orderEmail") order.email = orderInputValue;
    if (orderInputId === "orderBonus") order.bonus = orderInputValue;
    if (orderInputId === "orderAgreement") order.agreement = event.currentTarget.checked;
    if (orderInputId === "orderCity") order.city = orderInputValue;
    if (orderInputId === "orderStreet") order.street = orderInputValue;
    if (orderInputId === "orderHouse") order.house = orderInputValue;
    if (orderInputId === "orderBuilding") order.building = orderInputValue;
    if (orderInputId === "orderRoom") order.room = orderInputValue;
    if (orderInputId === "orderMessage") order.comment = orderInputValue;
    checkButtonsAccess();
  });
});

if (orderDeliveryMethodSelect)
  orderDeliveryMethodSelect.addEventListener("change", (event) => {
    const orderDeliveryElem = document.querySelector(".order__delivery");
    orderDeliveryElem.classList.remove("order__delivery_self");
    orderDeliveryElem.classList.remove("order__delivery_express");
    orderDeliveryElem.classList.remove("order__delivery_gazel");
    orderDeliveryElem.classList.remove("order__delivery_kamaz");
    orderDeliveryElem.classList.add(`order__delivery_${event.currentTarget.value}`);
    order.deliveryMethod = event.currentTarget.value;
    checkButtonsAccess();
  });

function checkButtonsAccess() {
  const moveToDeliveryButton = document.querySelector(
    ".order__personal .order__controls-button-next"
  );
  const moveToPaymentButton = document.querySelector(
    ".order__delivery .order__controls-button-next"
  );

  const isMoveToDeliveryAvailable = order.name && order.surname && order.phone && order.name;
  const isSelfMethodActive = order.deliveryMethod === "self";
  const isMoveToPaymentAvailable =
    order.deliveryMethod !== "self" &&
    order.city &&
    order.street &&
    order.house &&
    order.building &&
    order.room;

  if (moveToDeliveryButton && isMoveToDeliveryAvailable) moveToDeliveryButton.disabled = false;

  if (moveToDeliveryButton && !isMoveToDeliveryAvailable) moveToDeliveryButton.disabled = true;

  if (moveToPaymentButton && isSelfMethodActive) {
    moveToPaymentButton.disabled = false;
    return;
  }

  if (moveToPaymentButton && !isMoveToPaymentAvailable) {
    moveToPaymentButton.disabled = true;
    return;
  }

  if (moveToPaymentButton && isMoveToPaymentAvailable) {
    moveToPaymentButton.disabled = false;
    return;
  }
}
