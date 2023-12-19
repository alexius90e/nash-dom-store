const doubleRangeSliders = document.querySelectorAll('.double-range-slider');

doubleRangeSliders.forEach((doubleRangeSlider) => {
  const rangeWrapper = doubleRangeSlider.querySelector('.double-range-slider__inputs');
  const lowerSlider = doubleRangeSlider.querySelector('.double-range-slider__input_lower');
  const upperSlider = doubleRangeSlider.querySelector('.double-range-slider__input_upper');
  const lowerLabel = doubleRangeSlider.querySelector('.double-range-slider__label_lower');
  const upperLabel = doubleRangeSlider.querySelector('.double-range-slider__label_upper');
  const maxValue = parseInt(upperSlider.getAttribute('max'));
  const progress = document.createElement('div');
  progress.classList.add('double-range-slider__inputs-progress');
  rangeWrapper.append(progress);

  let lowerVal = parseInt(lowerSlider.value);
  let upperVal = parseInt(upperSlider.value);

  function updateValue() {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);
    lowerLabel.value = lowerVal * maxValue;
    upperLabel.value = upperVal * maxValue;
    updateProgress();
  }

  function updateProgress() {
    const maxPersentage = 96.5;
    const thumbWidth = 22;
    progress.style.left = `calc(${(lowerVal / maxValue) * maxPersentage}% + ${thumbWidth}px)`;
    progress.style.right = `calc(${
      ((maxValue - upperVal) / maxValue) * maxPersentage
    }% + ${thumbWidth}px)`;
  }

  updateProgress();

  upperSlider.addEventListener('input', () => {
    updateValue();
    if (upperVal < lowerVal + 1) {
      lowerSlider.value = upperVal - 1;
      if (lowerVal == lowerSlider.min) upperSlider.value = 1;
    }
  });

  lowerSlider.addEventListener('input', () => {
    updateValue();
    if (lowerVal > upperVal - 1) {
      upperSlider.value = lowerVal + 1;
      if (upperVal == upperSlider.max) lowerSlider.value = parseInt(upperSlider.max) - 1;
    }
  });

  lowerLabel.addEventListener('change', (e) => {
    const newValue = parseInt(e.target.value);
    if (newValue <= upperSlider.value) {
      lowerSlider.value = newValue;
    } else {
      lowerLabel.value = lowerSlider.value;
    }
  });

  upperLabel.addEventListener('change', (e) => {
    const newValue = parseInt(e.target.value);

    if (newValue >= lowerSlider.value) {
      upperLabel.value = newValue <= maxValue ? newValue : maxValue;
      upperSlider.value = newValue <= maxValue ? newValue : maxValue;
    } else {
      upperLabel.value = upperSlider.value;
    }
  });
});