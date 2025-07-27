const expressionDisplay = document.getElementById("expression");
const resultDisplay = document.getElementById("result");
const buttons = document.querySelectorAll(".buttons button");

let expression = "";
let lastAnswer = 0;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    switch (value) {
      case "clear":
        expression = "";
        resultDisplay.textContent = "0";
        updateExpression();
        break;

      case "del":
        expression = expression.slice(0, -1);
        updateExpression();
        break;

      case "Enter":
        try {
          const replaced = expression
            .replace(/√/g, "Math.sqrt")
            .replace(/%/g, "/100")
            .replace(/±/g, "-")
            .replace(/ans/g, lastAnswer);

          const result = eval(replaced);
          resultDisplay.textContent = result;
          lastAnswer = result;
        } catch {
          resultDisplay.textContent = "Error";
        }
        break;

      case "ans":
        expression += "ans";
        updateExpression();
        break;

      case "±":
        if (expression.length > 0 && !expression.endsWith("±")) {
          expression += "±";
        }
        updateExpression();
        break;

      default:
        expression += value;
        updateExpression();
        break;
    }
  });
});

function updateExpression() {
  expressionDisplay.textContent = expression;
}
