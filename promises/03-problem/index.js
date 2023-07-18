const appDiv = document.getElementById("app");

function getPeople() {
  fetch("https://swapi.dev/api/peoplee/")
    .then((response) => {
      if (!response.ok) {
        throw Error("Unsuccessful response");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("characters").textContent = data.count;
    })
    .catch((err) => {
      console.log("Error fetching data: ", err);
      document.querySelector("p").innerHTML = "Error fetching data";
    });
}

getPeople();

appDiv.innerHTML = `
  <span id="loading">Loading...</span>
  <p>⭐️ There are <strong id="characters">--</strong> primary characters in Star Wars</p>
`;
