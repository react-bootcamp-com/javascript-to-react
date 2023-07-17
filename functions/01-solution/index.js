function getLanguage() {
  return "python";
}

const app = document.getElementById("app");
app.innerHTML = `<h1>Hello ${getLanguage()}</h1>`;
