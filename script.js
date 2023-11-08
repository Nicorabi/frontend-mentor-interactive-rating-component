const mainContainerEl = document.querySelector("#main-container");
const secondContainerEl = document.querySelector("#second-container");
const btnEl = document.querySelector("#btn");
const ratingsEl = document.querySelector("#rating");
const numbersEl = document.querySelectorAll(".numbers");

btnEl.addEventListener("click", () => {
  mainContainerEl.style.display = "none";
  secondContainerEl.classList.remove("hidden");
})

numbersEl.forEach((number) => {
  number.addEventListener("click", () => {
    ratingsEl.textContent = number.textContent;
  })
})
