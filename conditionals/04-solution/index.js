function Profile() {
  const user = {
    name: "Brock Wegner",
    avatar:
      "https://images.unsplash.com/profile-1680533857160-e99b9ea2f17bimage?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff",
  };

  return `
    <div>
      <h1>Welcome, ${user.name}!</h1>
      ${user.avatar ? `<img src="${user.avatar}" />` : ""}
    </div>
  `;
}

const appDiv = document.getElementById("app");
appDiv.innerHTML = Profile();
