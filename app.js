const $screenDisplay = document.querySelector(".screen");
const $buttons = document.querySelectorAll("button");
let calculation = [];
let clearInput;

const calculate = (button) => {
  const value = button.textContent;

  if (value === "AC") {
    calculation = [];
    $screenDisplay.textContent = "";
  } else if (value === "=") {
    $screenDisplay.textContent = eval(clearInput);
  } else if (value === "DEL") {
    calculation.pop();
    clearInput = calculation.join("");
    $screenDisplay.textContent = clearInput;
  } else if (["/", "*", "+", "-"].includes(value)) {
    if (calculation.length === 0) {
      $screenDisplay.textContent = "";
    } else if (
      ["/", "*", "+", "-"].includes(calculation[calculation.length - 1])
    ) {
      calculation[calculation.length - 1] = value;
      clearInput = calculation.join("");
      $screenDisplay.textContent = clearInput;
    } else {
      calculation.push(value);
      clearInput = calculation.join("");
      $screenDisplay.textContent = clearInput;
    }
  } else {
    if (calculation.length === 0) {
      $screenDisplay.textContent = "";
    }
    calculation.push(value);
    clearInput = calculation.join("");
    $screenDisplay.textContent = clearInput;
  }
};

$buttons.forEach((button) => {
  button.addEventListener("click", () => {
    calculate(button);
  });
});
