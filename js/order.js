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
  paymentMethod: "offline",
};

const orderInputs = document.querySelectorAll(".order__input");
const orderCheckboxes = document.querySelectorAll(".order__checkbox");
const orderDeliveryMethodSelect = document.querySelector("#orderDeliveryMethod");
const orderPaymentOnline = document.querySelector("#orderPaymentOnline");
const orderPaymentOffline = document.querySelector("#orderPaymentOffline");

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

if (orderPaymentOnline)
  orderPaymentOnline.addEventListener("change", (event) => {
    order.paymentMethod = event.currentTarget.value;
    checkButtonsAccess();
  });

if (orderPaymentOffline)
  orderPaymentOffline.addEventListener("change", (event) => {
    order.paymentMethod = event.currentTarget.value;
    checkButtonsAccess();
  });

function checkButtonsAccess() {
  const moveToDeliveryButton = document.querySelector(
    ".order__personal .order__controls-button-next"
  );
  const moveToPaymentButton = document.querySelector(
    ".order__delivery .order__controls-button-next"
  );

  const isMoveToDeliveryAvailable = order.name && order.surname && order.phone && order.agreement;
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

const orderStagesItems = document.querySelectorAll(".order__stages-item");
const moveToPersonalButtons = document.querySelectorAll(".order__move_personal");
const moveToDeliveryButtons = document.querySelectorAll(".order__move_delivery");
const moveToPaymentButtons = document.querySelectorAll(".order__move_payment");
const moveToConfirmationButtons = document.querySelectorAll(".order__move_confirmation");
const moveToCompletedButtons = document.querySelectorAll(".order__move_completed");

moveToPersonalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showOrderContentSection("order__personal", 1);
  });
});

moveToDeliveryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showOrderContentSection("order__delivery", 2);
  });
});

moveToPaymentButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showOrderContentSection("order__payment", 3);
  });
});

moveToConfirmationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showOrderContentSection("order__confirmation", 4);
  });
});

moveToCompletedButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showOrderContentSection("order__completed", 4);
  });
});

function resetOrderStagesItems() {
  orderStagesItems.forEach((item) => item.classList.remove("active"));
}

function activateOrderStagesItems(position) {
  resetOrderStagesItems();
  [...orderStagesItems].slice(0, position).forEach((item) => item.classList.add("active"));
}

function hideOrderContentSections() {
  const sections = document.querySelectorAll(".order__content > *");
  sections.forEach((section) => section.classList.remove("active"));
}

function showOrderContentSection(className, position) {
  const targetSection = document.querySelector(`.${className}`);
  if (targetSection) {
    activateOrderStagesItems(position);
    hideOrderContentSections();
    targetSection.classList.add("active");
  }
}
