function MyApp() {
  const isAuth = false;

  return `<div>${isAuth ? "Auth user content" : "Log in here"}</div>`;
}

const appDiv = document.getElementById("app");
appDiv.innerHTML = MyApp();
