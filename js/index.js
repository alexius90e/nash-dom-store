import "./imask.js";
import "./sliders.js";
import "./good-card.js";
import "./good-info.js";
import "./header.js";
import "./double-range-slider.js";
import "./custom-select.js";
import "./filter.js";
import "./modal.js";
import "./callback-form.js";
import "./reviews.js";
import "./basket.js";
import "./order.js";
import "./auth.js";
import "./cabinet.js";

const maskOptions = {
  mask: '+{7} 000 000 00 00',
};

const phoneInputSelectors = ['input[type="tel"]'];

const phoneInputs = phoneInputSelectors
  .map((selector) => document.querySelectorAll(`${selector}`))
  .reduce((acc, array) => [...acc, ...array], []);

phoneInputs.forEach((inputElement) => IMask(inputElement, maskOptions));