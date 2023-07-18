const appDiv = document.getElementById("app");

function getPeople() {
  fetch("https://swapi.dev/api/people/")
    .then((response) => response.json())
    .then((data) => {
      const primaryCharacters = data.count;
      document.getElementById("characters").textContent = primaryCharacters;
    });
}

getPeople();

appDiv.innerHTML = `
  <p>⭐️ There are <strong id="characters">--</strong> primary characters in Star Wars</p>
`;
