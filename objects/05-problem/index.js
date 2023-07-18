const date = "today";

const stats = [
  { id: 1, record: { value: "71,897", name: "Total Subscribers" } },
  { id: 2, record: { value: "58.16%", name: "Avg. Open Rate" } },
  { id: 3, record: { value: "24.57%", name: "Avg. Click Rate" } },
];

function Statistics() {
  return `
    <ul>
     
    </ul>
  `;
}

function Statistic() {
  return `
    <li>
      <span></span>
      <h2></h2>
      <span>as of </span>
    </li>
  `;
}

const appDiv = document.getElementById("app");

appDiv.innerHTML = Statistics();
