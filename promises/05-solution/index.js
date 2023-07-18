const appDiv = document.getElementById("app");

// https://swapi.dev/api/films
async function getFilms() {
  try {
    const response = await fetch("https://swapi.dev/api/filmss");
    if (!response.ok) {
      throw new Error("Error making request");
    }
    const data = await response.json();
    const films = data.count;
    document.getElementById("films").textContent = films;
  } catch (error) {
    console.log(error);
    document.getElementById("title").textContent = "Error fetching data";
  } finally {
    document.getElementById("loading").remove();
  }
}

getFilms();

appDiv.innerHTML = `
  <span id="loading">Loading...</span>
  <p id="title">🍿 There are <strong id="films">--</strong>  Star Wars films</p>
`;
