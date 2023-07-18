function Message({ text }) {
  return `
    <div class="message">
      <header>
        <strong>Someone</strong> commented 
      </header>
      <p>No message</p>
    </div>
  `;
}

const appDiv = document.getElementById("app");

appDiv.innerHTML = Message({
  text: "Called client, they reassured me the invoice would be paid by the 25th.",
  author: "Chelsea Hagon",
  time: "3d ago",
});
