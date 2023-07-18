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
];

const livesIn = {
  state: "California",
  country: "USA",
};

console.log({ name: "Bob", ...livesIn });

function Users() {
  return `
    <div >

    </div>
  `;
}

const appDiv = document.getElementById("app");

appDiv.innerHTML = Users();
