const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const textSelection = document.querySelector(".color");

btn.addEventListener("click", () => {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
  textSelection.textContent = randomColor;
});
