/* Tableau de chaque categories */
let arrayIngredients = []
let arrayAppliance = [];
let arrayUstensils = [];

/* DOM */

const ingredientSelector = document.getElementById('ingredients');
const appareilsSelector = document.getElementById('appareils');
const ustensilesSelector = document.getElementById('ustensiles');

const buttonSelector = document.querySelectorAll('.filter__items__input');

console.log(buttonSelector);

ustensilesSelector.addEventListener('click', (e) => {

});

/* usetensils */
function getUstensiles(data) {
	data.forEach((recipe) => {
		arrayUstensils.push(recipe.ustensils);
	});
}

function displaydata(data){
    
}   