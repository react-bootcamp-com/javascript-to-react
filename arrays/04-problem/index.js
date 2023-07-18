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
        
      </ul>
    </main>
  `;
}

function TodoItem() {}

const appDiv = document.getElementById("app");
appDiv.innerHTML = TodoList();
