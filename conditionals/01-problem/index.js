function MyApp() {
  const isAuth = false;

  return "<div>Authenticated content</div>";
}

const appDiv = document.getElementById("app");
appDiv.innerHTML = MyApp();
