const appDiv = document.getElementById("app");

function getPeople() {
  fetch("https://swapi.dev/api/peoplee/")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

getPeople();

appDiv.innerHTML = `
  <p>⭐️ There are <strong id="characters">--</strong> primary characters in Star Wars</p>
`;
