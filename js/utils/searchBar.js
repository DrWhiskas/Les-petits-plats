let newArray = [];
// DOM
const searchSelection = document.getElementById('search');
const recipesSection = document.getElementById('recipes');

searchSelection.addEventListener('keyup', (e) => {
	const searchKey = e.target.value;
	searchRecipe(searchKey);
	recipesSection.innerHTML = '';
	recipesDisplay(newArray);
});


/* TRAITEMENT DE LA BARRE DE RECHERCHE */

function searchRecipe(keys) {
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
	} else {
		//console.log(keys.length);
		//document.body.innerHTML = ``;
	}
	newArray = [...new Set(newArray)];
}