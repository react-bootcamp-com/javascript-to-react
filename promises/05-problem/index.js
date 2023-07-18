const appDiv = document.getElementById("app");

// https://swapi.dev/api/films
function getFilms() {}

getFilms();

appDiv.innerHTML = `
  <span id="loading">Loading...</span>
  <p>🍿 There are <strong id="films">--</strong>  Star Wars films</p>
`;
