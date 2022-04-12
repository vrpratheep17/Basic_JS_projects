//let count = 0;
// let decreaseButton = document.querySelector(".decrease");
// let resetButton = document.querySelector(".reset");
// let increaseButton = document.querySelector(".increase");

// decreaseButton.addEventListener("click", () => {
//   count--;
//   updateCount();
// });

// resetButton.addEventListener("click", () => {
//   count = 0;
//   updateCount();
// });

// increaseButton.addEventListener("click", () => {
//   count++;
//   updateCount();
// });

// let updateCount = () => {
//   let display = document.getElementById("value");
//   if (count < 0) {
//     display.style.color = "red";
//   } else if (count > 0) {
//     display.style.color = "green";
//   }
//   display.textContent = count;
// };

let count = 0;
let btns = document.querySelectorAll(".btn");
let display = document.querySelector("#value");

btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    let styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count < 0) {
      display.style.color = "red";
    } else if (count > 0) {
      display.style.color = "green";
    } else {
      display.style.color = "#222";
    }

    display.textContent = count;
  });
});
