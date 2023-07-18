function createHeader() {
  return "<h1>👾 My Computer Setup</h1>";
}

function createCoverImage(src, height = "300px", width = "520px") {
  return `<img src="${src}" height="${height}" width="${width}">`;
}

const app = document.getElementById("app");
app.innerHTML = `
   ${createHeader()}
   ${createCoverImage(
     "https://images.unsplash.com/photo-1547082299-de196ea013d6",
     "500px"
   )}
`;
