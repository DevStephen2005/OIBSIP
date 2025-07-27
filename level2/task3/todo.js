// Get references to DOM elements
const todoForm = document.getElementById("todo-form");
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const todoList = document.getElementById("todo-list");

// Handle form submit
todoForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting normally

  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();

  if (title && description) {
    addTodoItem(title, description);
    todoForm.reset(); // Clear input fields
  }
});

// Add new todo item to the table
function addTodoItem(title, description) {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${title}</td>
    <td>${description}</td>
    <td><button class="delete-btn">🗑️</button></td>
  `;

  // Add delete functionality
  row.querySelector(".delete-btn").addEventListener("click", () => {
    row.remove();
  });

  todoList.appendChild(row);
}
