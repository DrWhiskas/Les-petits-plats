let newArray = [];
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
	newArray = []
	if (keys.length > 2) {
		recipes.forEach((recipe) => {
			/* RECIPES TITLES */
			if (recipe.name.toLowerCase().includes(keys)) {
				newArray.push(recipe);
			}
			/* USTENSILS */
			recipe.ustensils.forEach((ustensil) => {
				if (ustensil.toLowerCase().includes(keys)) {
					newArray.push(recipe);
				}
				/* APPAREILS */
				if (recipe.appliance.toLowerCase().includes(keys)) {
					newArray.push(recipe);
				}
			})
			/* INGREDIENTS */
			recipe.ingredients.forEach((newingredient)=>{
				if(newingredient.ingredient.toLowerCase().includes(keys)){
					newArray.push(recipe);
				}
			})

		})
		newArray = [...new Set(newArray)];
		recipesDisplay(newArray);
	} else {
		recipesDisplay(recipes);
		console.log(newArray);

	}
	
}