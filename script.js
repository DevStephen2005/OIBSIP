function convertTemp() {
  const degrees = parseFloat(document.getElementById('degrees').value);
  const type = document.getElementById('type').value;
  const result = document.getElementById('result');

  if (isNaN(degrees)) {
    result.textContent = "Please enter a valid number.";
    return;
  }

  let converted;
  if (type === "fahrenheit") {
    // F to C
    converted = (degrees - 32) * (5 / 9);
    result.textContent = `${converted.toFixed(4)} °C`;
  } else {
    // C to F
    converted = (degrees * 9 / 5) + 32;
    result.textContent = `${converted.toFixed(4)} °F`;
  }
}


const expressionEl = document.getElementById("expression");
const resultEl = document.getElementById("result");
const buttons = document.querySelectorAll("button");

let expression = "";
let lastAnswer = 0;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    switch (value) {
      case "clear":
        expression = "";
        resultEl.textContent = "0";
        break;
      case "del":
        expression = expression.slice(0, -1);
        break;
      case "Enter":
        try {
          let finalExpr = expression.replace(/√/g, "Math.sqrt")
                                    .replace(/±/g, "*-1")
                                    .replace(/ans/g, lastAnswer)
                                    .replace(/%/g, "*0.01");
          lastAnswer = eval(finalExpr);
          resultEl.textContent = lastAnswer;
        } catch {
          resultEl.textContent = "Error";
        }
        break;
      case "ans":
        expression += "ans";
        break;
      case "±":
      case "√":
      case "%":
        expression += value;
        break;
      default:
        expression += value;
        break;
    }

    expressionEl.textContent = expression;
  });
});



const form = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();

  if (!title || !description) return;

  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${title}</td>
    <td>${description}</td>
    <td><button class="delete-btn">X</button></td>
  `;

  todoList.appendChild(tr);

  // Reset form
  form.reset();

  // Delete action
  tr.querySelector(".delete-btn").addEventListener("click", () => {
    todoList.removeChild(tr);
  });
});
