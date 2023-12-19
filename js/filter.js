const filter = document.querySelector(".category__filter");
const filterButton = document.querySelector(".category__controls-filter");
const filterForm = document.querySelector(".category__filter-form");
const filterClose = document.querySelector(".category__filter-close");

if (filterButton) {
  filterButton.addEventListener("click", (event) => {
    if (filter === null) return;
    filter.classList.toggle("active");
    event.currentTarget.classList.toggle("active");
  });
}

if (filterClose) {
  filterClose.addEventListener("click", (event) => {
    if (filter === null) return;
    if (filterButton === null) return;
    filter.classList.remove("active");
    filterButton.classList.remove("active");
  });
}

if (filterForm) {
  filterForm.addEventListener("click", (event) => {
    const resetButton = filterForm.querySelector(".category__filter-reset-button");
    const isResetButton = event.target === resetButton;
    if (isResetButton) event.currentTarget.reset();
  });

  filterForm.addEventListener("submit", (event) => {
    event.preventDefault();
  });
}
