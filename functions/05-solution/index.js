const profileProps = {
  src: "https://images.unsplash.com/profile-1584086234832-be18ba3c6918image?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff",
};

function createProfile(props) {
  return `
     <header>
       <img class="profile" src="${props.src}" />
       <span>${props.name || "Reed Barger"}</span>
     </header>
   `;
}

const photoProps = {
  src: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  width: "500px",
};

function createPhoto(props) {
  return `
      <img src="${props.src}" width="${props.width}" />
   `;
}

const app = document.getElementById("app");
app.innerHTML = `
   <div>
   ${createProfile(profileProps)}
   ${createPhoto(photoProps)}
   </div>
`;
