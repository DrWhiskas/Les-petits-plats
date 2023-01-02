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
const menuUse = document.getElementById('filter__usetensils');
const menung = document.getElementById('filter__ing');
 



/* FILTERS */

appareilsSelector.addEventListener('click', (e) => {
	e.preventDefault();
	checkApplicances = true
	console.log(newArray);
	toggleList(menung);
	setList(newArray);
});

ingredientSelector.addEventListener('click', (e) => {
	e.preventDefault();
	checkIngredient = true;
	console.log(newArray);
	toggleList(menuApp);
	setList(newArray);
	
});
ustensilesSelector.addEventListener('click', (e) => {
	e.preventDefault();
	checkUstensil = true;
	console.log(newArray);
	toggleList(filter__usetensils);
	setList(newArray);
});



/* GET DATA */

function setList (testArray){
	let appList = []
	let usetensilList =[]
	let toto = []
		recipes.forEach((recipe) => {
		if (checkIngredient == true) {
			
			recipe.ingredients.forEach((ingredient) => {
				toto.push(ingredient)
				console.log(ingredient);
			})
			checkIngredient = false;
		} 
		if (checkUstensil == true) {
			recipe.ustensils.forEach((ustensil) =>{
			usetensilList.push(ustensil);
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
	usetensilList = [...new Set(usetensilList)];
	usetensilList.forEach((use) => {
		filterUsetensil.innerHTML += `<li class="filter__item"> ${use}</li>`;
	});
	 creatTag();
}

function toggleList(filter){
	filter.classList.toggle("oui")
}