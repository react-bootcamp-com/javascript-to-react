function createButton(action, style) {
  return `<button style="${style}">${action} Video</button>`;
}

function createHeader(title, style) {
  return `<h1 style="${style}">Watch ${title}</h1>`;
}

const videoSrc =
  "https://reactbootcamp.nyc3.digitaloceanspaces.com/big-buck-bunny.mp4";

function createVideo(src, style) {
  return `<video src="${src}" style="${style}" controls></video>`;
}

const app = document.getElementById("app");
app.innerHTML = `
${createHeader("Big Buck Bunny")}
${createVideo(videoSrc, "height:300px;width:100%;")}
  <div style="margin-top: 20px;">
  ${createButton("Like", "background-color: green;")}
  ${createButton("Dislike", "background-color: red;")}
  </div>
`;
