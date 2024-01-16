const reviews = document.querySelectorAll(".good-reviews__card-review");

reviews.forEach((review) => {
  const reviewTextElem = review.querySelector(".good-reviews__card-review-text");
  const reviewLengthLimit = 510;
  if (reviewTextElem.innerText.length >= reviewLengthLimit) addReviewToggler(review);
});

const reviewTogglers = document.querySelectorAll(".good-reviews__card-review-more-btn");

reviewTogglers.forEach((reviewToggler) => {
  reviewToggler.addEventListener("click", (event) => {
    const reviewElem = event.currentTarget.closest(".good-reviews__card-review");
    reviews.forEach((review) => {
      if (review !== reviewElem) review.classList.remove("active");
    });
    reviewElem.classList.toggle("active");
  });
});

function addReviewToggler(reviewElem) {
  const togglerElem = document.createElement("div");
  togglerElem.classList.add("good-reviews__card-review-more");
  togglerElem.innerHTML = `
    <button class="good-reviews__card-review-more-btn">
      <span
        class="good-reviews__card-review-more-btn-text good-reviews__card-review-more-btn-text_closed"
      >
        Развернуть
      </span>
      <span
        class="good-reviews__card-review-more-btn-text good-reviews__card-review-more-btn-text_opened"
        >Свернуть
      </span>
    </button>`;
  reviewElem.append(togglerElem);
}

const addReviewButtons = document.querySelectorAll(".good-reviews__title-button");

addReviewButtons.forEach((addReviewButton) => {
  addReviewButton.addEventListener("click", () => {
    const modalReview = document.querySelector(".modal-review");
    if (modalReview) modalReview.classList.add("active");
  });
});

const modalReviewTextareas = document.querySelectorAll(".modal-review__form-message-textarea");

modalReviewTextareas.forEach((textarea) => {
  textarea.addEventListener("input", (event) => {
    const modalReviewForm = textarea.closest(".modal-review__form");
    const modalReviewMessageCounter = modalReviewForm.querySelector(
      ".modal-review__form-message-counter-value"
    );
    modalReviewMessageCounter.innerText = event.currentTarget.value.length;
  });
});
