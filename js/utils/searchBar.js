let newArray = [];
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
	newArray = []
	usetensilArray = []
	appArray =[]
	testArray = []
	if (keys.length > 2) {
		recipes.forEach((recipe) => {
			/* RECIPES TITLES */
			if (recipe.name.toLowerCase().includes(keys)) {
				newArray.push(recipe);
				//toto();
			}
			/* USTENSILS */
			recipe.ustensils.forEach((ustensil) => {
				if (ustensil.toLowerCase().includes(keys)) {
					newArray.push(recipe);
					usetensilArray.push(recipe.ustensils)
					

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
					//toto();
				}
			})
		
		})
		setList();
		newArray = [...new Set(newArray)];
		recipesDisplay(newArray);
	} else {
		recipesDisplay(recipes);
	}
}

function oui(tableau){
	tableau.forEach((sadge) =>{
		console.log(sadge);
	});
}