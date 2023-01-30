/* Tableau de chaque categories */
let arrayIngredients = []
let arrayAppliance = [];
let arrayUstensils = [];



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

/* APPAREILS */
appareilsSelector.addEventListener('click', (e) => {
	checkApplicances = !checkApplicances
	if(checkApplicances){
		filterAppareil.classList.remove('hidden')
		filterAppareil.classList.add('active');
	}
	else{
		filterAppareil.classList.add('hidden');
		filterAppareil.innerHTML=``
	}
	
});

/* INGREDIENT */
ingredientSelector.addEventListener('click', (e) => {
	checkIngredient = true;
	setList(newArray);
	
});

/* USETENSILS */
ustensilesSelector.addEventListener('click', (e) => {
	checkUstensil = !checkUstensil;
	if (checkUstensil) {
		filterUsetensil.classList.remove('hidden');
		filterUsetensil.classList.add('active');
		setList(newArray);
	} else {
		filterUsetensil.classList.add('hidden');
		filterUsetensil.innerHTML = ``;
	}
});
/* chevron => aficher pas remplir  */

/* GET DATA */

function setList (testArray){
	let appList = []
	let usetensilList =[]
	let toto = []
		recipes.forEach((recipe) => {
		if (checkIngredient == true) {
			recipe.ingredients.forEach((ingredient) => {
				toto.push(ingredient)
			})
			checkIngredient = false;
		} 
		if (checkUstensil == true) {
			recipe.ustensils.forEach((ustensil) =>{
			usetensilList.push(ustensil);
			})
			usetensilList = [...new Set(usetensilList)];
			displayList(usetensilList, filterUsetensil);
		}
		if (checkApplicances = true){
			filterAppareil.innerHTML =``
			appList.push(recipe.appliance)
			appList = [...new Set(appList)];
			displayList(appList);
		}
	});
	
	 createTag();
}

function displayList(array){
	array.forEach((item) =>{
		filterAppareil.innerHTML += `<li class="filter__item">${item}</li>`;
	})
}