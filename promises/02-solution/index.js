const appDiv = document.getElementById("app");

function getPeople() {
  fetch("https://swapi.dev/api/peoplee/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error making request");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
      document.getElementById("title").textContent = "Could not get characters";
    });
}

getPeople();

appDiv.innerHTML = `
  <p id="title">⭐️ There are <strong id="characters">--</strong> primary characters in Star Wars</p>
`;
