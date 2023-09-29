let newArray = recipes;
let usetensilArray = [];
let ingredientArray = [];
let appArray = [];
let testArray = [];
// DOM
const searchSelection = document.getElementById('search');
const recipesSection = document.getElementById('recipes');

searchSelection.addEventListener('keyup', (e) => {
	const searchKey = e.target.value;
	searchRecipe(searchKey);
});
/* TRAITEMENT DE LA BARRE DE RECHERCHE */
function searchRecipe(keys) {
	recipesSection.innerHTML = '';
	newArray = [];
	usetensilArray = [];
	ingredientArray = [];
	appArray = [];
	testArray = [];
	if (keys.length > 2) {
		for (let i = 0; i < recipes.length; i++) {
			/* RECIPES TITLES */
			if (recipes[i].name.toLowerCase().includes(keys)) {
				newArray.push(recipes[i]);
			}
			/* USTENSILS */
			for (let j = 0; j < recipes[i].ustensils.length; j++) {
				if (recipes[i].ustensils[j].toLowerCase().includes(keys)) {
					newArray.push(recipes[i]);
					usetensilArray.push(recipes[i].ustensils);
				}
			}
			/* APPAREILS */
			if (recipes[i].appliance.toLowerCase().includes(keys)) {
				newArray.push(recipes[i]);
			}
			/* INGREDIENTS */
			for (let k = 0; k < recipes[i].ingredients.length; k++) {
				if (recipes[i].ingredients[k].ingredient.toLowerCase().includes(keys)) {
					newArray.push(recipes[i]);
				}
			}
		}
		setList(newArray);
		newArray = [...new Set(newArray)];
		recipesDisplay(newArray);
	} else {
		setList(recipes);
		newArray = [...new Set(recipes)];
		recipesDisplay(newArray);
	}
}

function resetRecipes() {
	recipesSection.innerHTML = ``;
}
