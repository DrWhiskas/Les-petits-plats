/* Tableau de chaque categories */
let arrayIngredients = []
let arrayAppliance = [];
let arrayUstensils = [];

let filterArray = []

let checkIngredient = false
let checkUstensil = false
let checkApplicances = false

/* DOM */

const ingredientSelector = document.getElementById('ingredients');
const appareilsSelector = document.getElementById('appareils');
const ustensilesSelector = document.getElementById('ustensiles');

const test = document.getElementById('filter__box__ingredients');

const buttonSelector = document.querySelectorAll('.filter__items__input');


appareilsSelector.addEventListener('click', (e) => {
	e.preventDefault();
	checkApplicances = true
	getArray(arrayAppliance);
	displayData(arrayAppliance)
	
});

ingredientSelector.addEventListener('click', (e) => {
	e.preventDefault();
	checkIngredient = true;
	getArray(arrayIngredients);
	displayData(checkIngredient);
	
});
ustensilesSelector.addEventListener('click', (e) => {
	e.preventDefault();
	checkUstensil = true
	getArray(arrayUstensils);
	displayData(arrayUstensils);
});


/* GET DATA */

function getArray (testArray){
	recipes.forEach((recipe) => {
		if (checkIngredient == true) {
			recipe.ingredients.forEach((ingredient) => {
				testArray.push(ingredient.ingredient);
			})
			checkIngredient = false;
		} 
		if (checkUstensil == true) {
			recipe.ustensils.forEach((ustensil) =>{
			testArray.push(ustensil);
			})
			checkUstensil = false
		}
		if (checkApplicances = true){
			testArray.push(recipe.appliance);
		}
		checkApplicances = false
	});
	
}

function displayData(nArray){
	//nArray = Array.from(nArray);
	test.innerHTML = '';	
	nArray = [...new Set(nArray)];
	nArray.forEach((item) =>{
		const list = document.createElement('li');
		list.classList.add('filter__box__list');
		list.innerHTML=`${item}`	
		test.appendChild(list);
	})
	
	
}