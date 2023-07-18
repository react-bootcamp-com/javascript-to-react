function DownloadButton(props) {
  return `
    <button class="download-button ${props.isPaid ? "paid" : ""}">
      <span>${props.isPaid ? "Buy Now" : "Download Free"}</span>
    </button>
  `;
}

const appDiv = document.getElementById("app");
appDiv.innerHTML = DownloadButton({
  isPaid: true,
});
