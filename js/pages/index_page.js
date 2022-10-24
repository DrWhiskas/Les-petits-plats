export const getRecipes = () =>
  fetch("../data/recipes.json").then((res) => res.json());
