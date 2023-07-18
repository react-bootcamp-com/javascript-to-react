const appDiv = document.getElementById("app");

async function getStarships() {
  const response = await fetch("https://swapi.dev/api/starships/");
  const data = await response.json();
  const starships = data.count;
  document.getElementById("starships").textContent = starships;
}

getStarships();

appDiv.innerHTML = `
  <p>🛳️ There are <strong id="starships">--</strong> starships in Star Wars</p>
`;
