const todos = [
  {
    done: false,
    text: "Wash dishes",
  },
  {
    done: true,
    text: "Pick up laundry",
  },
  {
    done: true,
    text: "Feed dog",
  },
];

function TodoList() {
  return `
    <main>
      <h1>What I did today</h1>
      <ul>
        ${todos
          .map(
            (todo) => `
          ${TodoItem(todo)}
        `
          )
          .join("")}
      </ul>
    </main>
  `;
}

function TodoItem(todo) {
  return `
    <li>
      <span>${todo.done ? "✅" : "❌"}</span>
      <span>${todo.text}</span>
    </li>
  `;
}

const appDiv = document.getElementById("app");
appDiv.innerHTML = TodoList();
