function Message({ text = "No message", author = "Someone", time = "" }) {
  return `
    <div class="message">
      <header>
        <strong>${author}</strong> commented ${time}
      </header>
      <p>${text}</p>
    </div>
  `;
}

const appDiv = document.getElementById("app");

appDiv.innerHTML = Message({
  // text: "Called client, they reassured me the invoice would be paid by the 25th.",
  // author: "Chelsea Hagon",
  // time: "3d ago",
});
