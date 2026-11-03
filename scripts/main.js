const buttons = document.querySelectorAll(".num-btn");
const clearBtn = document.querySelector(".num-btn-c");
const screen = document.getElementById("screen");
const multiply = document.getElementById("x");
const plu = document.getElementById("plu");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    screen.innerText += button.innerText;
  });
});

multiply.addEventListener("click", () => {
  screen.innerText += "X";
});

clearBtn.addEventListener("click", () => {
  screen.innerText = "";
});

plu.addEventListener("click", () => {
  screen.innerText = "";
});
