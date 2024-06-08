const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
  if (btnValue === "=" && output !== "") {
    // if output has '%',  replace with '/100' before evaluation.
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

// Add eventListner to button
buttons.forEach((buttons) => {
  // Button click listners calls calulator() with dataset value as arguments.
  buttons.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
