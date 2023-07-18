const date = "today";

const stats = [
  { id: 1, record: { value: "71,897", name: "Total Subscribers" } },
  { id: 2, record: { value: "58.16%", name: "Avg. Open Rate" } },
  { id: 3, record: { value: "24.57%", name: "Avg. Click Rate" } },
].map((stat) => ({
  ...stat,
  record: {
    ...stat.record,
    date,
  },
}));

function Statistics() {
  return `
    <ul>
     ${stats
       .map(
         (stat) => `
       ${Statistic(stat)}
     `
       )
       .join("")}
    </ul>
  `;
}

function Statistic(stat) {
  return `
    <li>
      <span>${stat.record.name}</span>
      <h2>${stat.record.value}</h2>
      <span>as of ${stat.record.date}</span>
    </li>
  `;
}

const appDiv = document.getElementById("app");

appDiv.innerHTML = Statistics();
