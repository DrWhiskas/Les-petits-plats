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
const filterAppareil = document.getElementById('filter__box__appareils');
const filterUsetensil = document.getElementById('filter__box__usetensils');

const buttonSelector = document.querySelectorAll('.filter__items__input');


/* MENU */
const menuApp = document.getElementById('filter__app');

/* FILTERS */

appareilsSelector.addEventListener('click', (e) => {
	e.preventDefault();
	checkApplicances = true
	console.log(newArray);
	toggleList(menuApp);
	setList(newArray);
	
	//displayData(filterAppareil, newArray);
	

	
});

ingredientSelector.addEventListener('click', (e) => {
	e.preventDefault();
	checkIngredient = true;
	setList(newArray);
	console.log(newArray);
	
});
ustensilesSelector.addEventListener('click', (e) => {
	e.preventDefault();
	checkUstensil = true
	setList(arrayUstensils);
	//displayData(filterUsetensil, arrayUstensils);
});



/* GET DATA */

function setList (testArray){
	let appList = []
		recipes.forEach((recipe) => {
		if (checkIngredient == true) {
			
			recipe.ingredients.forEach((ingredient) => {
				
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
			// creer nouveau tableau 
			
			appList.push(recipe.appliance)
			//filterAppareil.innerHTML += `<li> ${recipe.appliance} </li>`;

		}
		checkApplicances = false
	});
	appList = [...new Set(appList)];
	appList.forEach((app) =>{
		filterAppareil.innerHTML+=`<li class="filter__item"> ${app}</li>`
	})
}

function toggleList(filter){
	filter.classList.toggle("oui")
}