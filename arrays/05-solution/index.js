const recipes = [
  {
    isVegetarian: true,
    name: "Greek Salad",
    ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
  },
  {
    isVegetarian: false,
    name: "Hawaiian Pizza",
    ingredients: [
      "pizza crust",
      "pizza sauce",
      "mozzarella",
      "ham",
      "pineapple",
    ],
  },
  {
    isVegetarian: true,
    name: "Hummus",
    ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
  },
];

function Recipes() {
  return `
    <div>
      <h1>Vegetarian Recipes</h1>
      ${recipes
        .filter((recipe) => recipe.isVegetarian)
        .map(
          (recipe) => `
        <div>
          <h3>${recipe.name}</h3>
          <ul>
            ${recipe.ingredients
              .map(
                (ingredient) => `
              <li>${ingredient}</li>
            `
              )
              .join("")}
          </ul>
        </div>
      `
        )
        .join("")}
    </div>
  `;
}

const appDiv = document.getElementById("app");
appDiv.innerHTML = Recipes();
