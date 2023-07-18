const appDiv = document.getElementById("app");

async function getStarships() {
  const response = await fetch("https://swapi.dev/api/starships/");
  console.log(response);
  // .then((response) => response.json())
  // .then((data) => {
  //   document.getElementById("starships").textContent = data.count;
  // });
}

getStarships();

appDiv.innerHTML = `
  <p>🛳️ There are <strong id="starships">--</strong> starships in Star Wars</p>
`;
