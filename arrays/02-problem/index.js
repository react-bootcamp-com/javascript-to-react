const members = [
  {
    name: "Lindsay Walton",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "https://twitter.com/lindsay",
    linkedinUrl: "https://linkedin.com/lindsay",
  },
  {
    name: "Tom Cook",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "https://twitter.com/tom",
    linkedinUrl: "https://linkedin.com/tom",
  },
  {
    name: "Courtney Henry",
    role: "Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "https://twitter.com/courtney",
    linkedinUrl: "https://linkedin.com/courtney",
  },
];

function About() {
  return `
    <header>
      <h1>Who we are</h1>
      <h2>Meet the team that makes this all possible</h2>
    </header>
    <div class="members">
    
    </div>
  `;
}

function Member() {
  return `
    <div class="member">
        
    </div>
  `;
}

const appDiv = document.getElementById("app");
appDiv.innerHTML = About();
