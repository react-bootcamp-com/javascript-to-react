function createButton(action, style) {
  return `<button style="${style}">${action} Video</button>`;
}

const app = document.getElementById("app");
app.innerHTML = createButton("Upvote", "background-color:green;color:white;");
