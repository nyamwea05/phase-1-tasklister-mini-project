document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("todo-form");
  const input = document.getElementById("todo-input");
  const list = document.getElementById("todo-list");

  let todos = [];

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const newTodo = {
      id: Date.now(),
      text: input.value,
      completed: false
    };

    todos.push(newTodo);

    renderTodos();

    input.value = "";
  });

  function renderTodos() {
    list.innerHTML = "";

    todos.forEach(function(todo) {
      const item = document.createElement("li");

      const text = document.createElement("span");
      text.innerText = todo.text;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = todo.completed;
      checkbox.addEventListener("change", function() {
        todo.completed = !todo.completed;
        renderTodos();
      });

      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.addEventListener("click", function() {
        todos = todos.filter(function(item) {
          return item.id !== todo.id;
        });
        renderTodos();
      });

      if (todo.completed) {
        item.classList.add("completed");
      }

      item.appendChild(checkbox);
      item.appendChild(text);
      item.appendChild(deleteButton);
      list.appendChild(item);
});
