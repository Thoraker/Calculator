function calculate(expression) {
  let value1 = Number(expression.split("+" || "-" || "*" || "/")[0]);
  let value2 = Number(expression.split("+" || "-" || "*" || "/")[1]);

  if (expression.includes("+")) {
    return value1 + value2;
  } else if (expression.includes("-")) {
    return value1 - value2;
  } else if (expression.includes("*")) {
    return value1 * value2;
  } else if (expression.includes("/")) {
    return value1 / value2;
  }
}

function calculator() {
  let display = document.querySelector("input");
  let keys = document.querySelectorAll("span");
  keys.forEach((key) => {
    key.addEventListener("click", (e) => {
      if (e.target.id == "clear") {
        display.value = "";
      } else if (e.target.id == "backspace") {
        if (display.value) {
          display.value = display.value.slice(0, -1);
        }
      } else if (e.target.id == "percentage") {
        display.value += "%";
      } else if (e.target.id == "divide") {
        display.value += "/";
      } else if (e.target.id == "multiply") {
        display.value += "*";
      } else if (e.target.id == "minus") {
        display.value += "-";
      } else if (e.target.id == "plus") {
        display.value += "+";
      } else if (e.target.id == "equal") {
        display.value = calculate(display.value);
      } else if (e.target.id == "dot") {
        display.value += ".";
      } else {
        display.value += e.target.id;
      }
    });
  });
}

calculator();
