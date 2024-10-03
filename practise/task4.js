let display = document.getElementById("display");
let parent = document.getElementById("parent");

let input1 = " ";
let operator = " ";
let input2 = " ";
parent.addEventListener("click", (e) => {
  let btn = e.target.tagName;

  if (btn == "BUTTON") {
    let value = e.target.innerText;

    if (value >= "0" && value <= "9") {
      input1 += value;
      display.innerText = `${input2} ${operator} ${input1}`;
    } else if (
      value == "%" ||
      value == "+" ||
      value == "-" ||
      value == "*" ||
      value == "/"
    ) {
      if (input1) {
        input2 = input1;
        input1 = "";
      }
      operator = value;
      display.innerText = `${input2} ${operator} ${input1}`;
    } else if (value == "=") {
      if (input1 && operator && input2) {
        let a = parseFloat(input1);
        let b = parseFloat(input2);
        let result;
        switch (operator) {
          case "+":
            result = b + a;
            break;

          case "-":
            result = b - a;
            break;

          case "*":
            result = b * a;
            break;

          case "/":
            result = b / a;
            result = result.toFixed(4);
            break;

          case "%":
            result = b % a;
            result = result.toFixed(4);
            break;
        }
        display.innerText = result;
        input1 = result.toString();
        console.log(input1);

        operator = "";
        input2 = "";
      }
    } else if (value == "cl") {
      input1 = "";
      display.innerText = `${input2} ${operator} ${input1}`;
    } else if (value == "Ac") {
      input1 = "";
      operator = "";
      input2 = "";
      display.innerText = "";
    }
  }
});
