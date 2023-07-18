const links = [
  {
    text: "About",
    href: "/company/about",
  },
  {
    text: "Pricing",
    href: "/support/pricing",
  },
  {
    text: "Jobs",
    href: "/company/jobs",
  },
  {
    text: "Press",
    href: "/company/press",
  },
  {
    text: "Documentation",
    href: "/support/docs",
  },
];

// const filtered = [1, 2, 3].filter((number) => number > 1);
// console.log(filtered);

function Footer() {
  return `
    <footer>
      <section>
        <h4>Support</h4>
        <div>
        
        </div>
      </section>

      <section>
        <h4>Company</h4>
        <div>
        </div>
      </section>
    </footer>
  `;
}

function Link(link) {
  return `
    <div>
      <a href="${link.href}">
        ${link.text}
      </a>
    </div>
  `;
}

const appDiv = document.getElementById("app");
appDiv.innerHTML = Footer();
