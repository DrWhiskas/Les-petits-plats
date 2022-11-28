const newArray = [];
const ustensils = [];
// DOM
const searchSelection = document.getElementById('search');
const recipesSection = document.getElementById('recipes');
searchSelection.addEventListener('keyup', (e) => {
	const searchKey = e.target.value;
	searchRecipe(searchKey);
	searchAppliance(searchKey);
	recipesDisplay(newArray);
});
function searchRecipe(keys) {
	if (keys.length > 2) {
		recipes.forEach((recipe) => {
			/* RECIPES TITLES */
			if (recipe.name.toLowerCase().includes(keys)) {
				newArray.push(recipe);
				//recipesSection.innerHTML = '';
				//recipesDisplay(newArray);
			}
			/* USTENSILS */
			recipe.ustensils.forEach((shakira) => {
				 if (shakira.toLowerCase().includes(keys)) {
					newArray.push(recipe);
					//recipesSection.innerHTML = '';
					//recipesDisplay(newArray);
				}
			});
		});
	}
	else{
		recipesSection.innerHTML = '';
		recipesDisplay(recipes)
	}
}
function searchAppliance(keys) {
	if (keys.length > 2) {
		recipes.forEach((recipe) => {
			if (recipe.appliance.toLowerCase().includes(keys)) {
				newArray.push(recipe);
				recipesSection.innerHTML = '';
				//recipesDisplay(newArray);
			}
		});
	} else {
		recipesSection.innerHTML = '';
		recipesDisplay(recipes);
	}
}
