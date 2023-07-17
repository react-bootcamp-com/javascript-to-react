function createButton(text) {
  return `<button>${text}</button>`;
}

const app = document.getElementById("app");
app.innerHTML = createButton("Dislike Video");
