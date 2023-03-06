let newArray = recipes;
let usetensilArray = []
let ingredientArray = [];
let appArray = []
let testArray = []
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
	newArray = recipes;
	usetensilArray = [];
	ingredientArray = [];
	appArray = [];
	testArray = [];
	if (keys.length > 2) {
		newArray = [];
		for (let i = 0; i < recipes.length; i++) {
			let checkRecipes = false;
			/* RECIPES TITLES */
			if (recipes[i].name.toLowerCase().includes(keys)) {
				newArray.push(recipes[i]);
				checkRecipes = true;
			}
			/* USTENSILS */
			for (let j = 0; j < recipes[i].ustensils.length; j++) {
				if (recipes[i].ustensils[j].toLowerCase().includes(keys)) {
						newArray.push(recipes[i]);
						checkRecipes = true;
						usetensilArray.push(recipes[i].ustensils[j]);
				}
			}
			/* APPAREILS */
			if (recipes[i].appliance.toLowerCase().includes(keys)) {
				newArray.push(recipes[i]);
				checkRecipes = true;
			}
			/* INGREDIENTS */
			for (let k = 0; k < recipes[i].ingredients.length; k++) {
				if (recipes[i].ingredients[k].ingredient.toLowerCase().includes(keys)) {
					newArray.push(recipes[i]);
					checkRecipes = true;
					ingredientArray.push(recipes[i].ingredients);
				}
			}
		}
		setList(newArray);
		newArray = [...new Set(newArray)];
		recipesDisplay(newArray);
		console.log(newArray);
	} else {
		recipesDisplay(recipes);
	}
}

function resetRecipes(){
	recipesSection.innerHTML = ``
}
/*
	recipes.forEach((recipe) => {
		if (recipe.name.toLowerCase().includes(keys)) {
			newArray.push(recipe);
		}
		recipe.ustensils.forEach((ustensil) => {
			if (ustensil.toLowerCase().includes(keys)) {
				newArray.push(recipe);
				usetensilArray.push(recipe.ustensils);
			}
			if (recipe.appliance.toLowerCase().includes(keys)) {
				newArray.push(recipe);
			}
		});
		recipe.ingredients.forEach((newingredient) => {
			if (newingredient.ingredient.toLowerCase().includes(keys)) {
				newArray.push(recipe);
			}
		});
	});
	*/