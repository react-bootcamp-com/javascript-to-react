function MyApp() {
  const isAuth = false;

  if (isAuth) {
    return "<div>Authenticated content</div>";
  }

  return "<div>Log in here</div>";
}

const appDiv = document.getElementById("app");
appDiv.innerHTML = MyApp();
