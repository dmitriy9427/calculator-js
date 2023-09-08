const btns = document.querySelector(".btns");
const ac = document.querySelector(".ac");
let result = document.querySelector(".calc");
let c = document.querySelector(".c");
result.textContent = "0";
let a = "",
  b = "",
  sign = "",
  finish = false;

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
const action = ["/", "-", "+", "*", "%"];

ac.addEventListener("click", () => {
  a = "";
  b = "";
  sign = "";
  finish = false;
  result.textContent = "0";
});

const handleActions = (key) => {
  if (key === "=") {
    if (b === "") b = a;
    switch (sign) {
      case "/":
        if (b === "0") {
          result.textContent = "Ошибка";
          a = "";
          b = "";
          sign = "";
          return;
        }
        a = a / b;
        break;
      case "*":
        a = a * b;
        break;
      case "-":
        a = a - b;
        break;
      case "+":
        a = +a + +b;
        break;
      case "%":
        a = ((a / b) * 1).toFixed(4);
        break;
    }
    finish = true;
    result.textContent = a;
  }
};

btns.addEventListener("click", (e) => {
  //   if (!e.target.classList.contains("btn")) return;
  if (e.target.classList.contains("ac")) return;
  const btn = e.target.textContent;

  //   switch (btn) {
  //     case "AC":
  //       result.textContent = "";
  //       break;
  //     case "=":
  //      if(result.textContent.search([/^0-9/+-*/mi]) != -1){
  //     return
  //   }
  //       result.textContent = eval(result.textContent).toFixed(4);
  //       break;
  //     default:
  //       result.textContent += btn;
  //   }

  if (numbers.includes(btn)) {
    if (b === "" && sign === "") {
      a += btn;
      result.textContent = a;
      return;
    } else if (a !== "" && b !== "" && finish) {
      b = btn;
      finish = false;
      result.textContent = b;
    } else {
      b += btn;
      result.textContent = b;
      return;
    }
  }

  if (action.includes(btn)) {
    sign = btn;
    result.textContent = sign;
    return;
  }

  handleActions(btn);
});
