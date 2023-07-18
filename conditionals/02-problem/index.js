function MyApp() {
  const isAuth = false;
  return isAuth ? "true" : "false";
}

const appDiv = document.getElementById("app");
appDiv.innerHTML = MyApp();
