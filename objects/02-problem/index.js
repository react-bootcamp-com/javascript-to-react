function Avatar({ src, ...rest }) {
  return `<img src="${src}" alt="${rest.alt}" style="border-radius: ${rest.borderRadius}" width="100px" />`;
}

const appDiv = document.getElementById("app");

appDiv.innerHTML = Avatar({
  src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  alt: "Bob Jones",
  borderRadius: "10px",
});
