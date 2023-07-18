const appDiv = document.getElementById("app");

function getPeople() {
  fetch("https://swapi.dev/api/people/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

getPeople();

appDiv.innerHTML = `
  <p>⭐️ There are <strong id="characters">--</strong> primary characters in Star Wars</p>
`;
