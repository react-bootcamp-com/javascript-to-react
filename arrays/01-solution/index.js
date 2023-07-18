const features = [
  "✅ Push to deploy",
  "✅ SSL certificates",
  "✅ Simple queues",
];

function Features() {
  return `
    <h1>App Features</h1>
    <ul>
      ${features
        .map(
          (feature) => `
         <li>${feature}</li>
      `
        )
        .join("")}
    </ul>
  `;
}

const appDiv = document.getElementById("app");
appDiv.innerHTML = Features();
