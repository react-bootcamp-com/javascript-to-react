function DownloadButton() {
  return `
    <button class="download-button">
      <span>Download Free</span>
    </button>
  `;
}

const appDiv = document.getElementById("app");
appDiv.innerHTML = DownloadButton({
  isPaid: true,
});
