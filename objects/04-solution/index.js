const livesIn = {
  state: "California",
  country: "USA",
};

const users = [
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
  },
  {
    name: "Whitney Francis",
    email: "whitney.francis@example.com",
  },
  {
    name: "Tom Cook",
    email: "tom.cook@example.com",
  },
].map((user) => ({
  ...user,
  ...livesIn,
}));

function Users() {
  return `
    <div>
      ${users
        .map(
          (user) => `
        <div>${user.name} lives in ${user.state}, ${user.country}</div>      
      `
        )
        .join("")}
    </div>
  `;
}

const appDiv = document.getElementById("app");

appDiv.innerHTML = Users();
