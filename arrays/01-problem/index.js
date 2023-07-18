function Features() {
  return `
      <h1>App Features</h1>
      <ul>
        <li>✅ Push to deploy</li>
        <li>✅ SSL certificates</li>
        <li>✅ Simple queues</li>
      </ul>
    `;
}

const appDiv = document.getElementById("app");
appDiv.innerHTML = Features();
