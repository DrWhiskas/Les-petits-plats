/* Tableau de chaque categories */
let arrayIngredients = []
let arrayAppliance = [];
let arrayUstensils = [];

/* DOM */

const ingredientSelector = document.getElementById('ingredients');
const appareilsSelector = document.getElementById('appareils');
const ustensilesSelector = document.getElementById('ustensiles');

const buttonSelector = document.querySelectorAll('.filter__items__input');


ustensilesSelector.addEventListener('click', (e) => {
	getUstensiles(recipes)
});

/* usetensils */
function getUstensiles(data) {
	const listselector = document.getElementById('sadge')
	
	data.forEach((recipe) => {
		arrayUstensils.push(recipe.ustensils);
		const newList = document.createElement('li');
		newList.classList.add('oui');
		newList.innerHTML = `
		<li>${recipe.ustensils}</li>
		`;
		document.body.appendChild(newList);
	});
}

function displaydata(data){
    
}   