export const getRecipes = () =>
  fetch("../data/recipes.json").then((res) => res.json());

  function oui() {
    const oui = document.createElement("div")
    oui.id = "oiuis"
    document.body.appendChild("oui")
  }