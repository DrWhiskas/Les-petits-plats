let checkIngredient = false;
let checkUstensil = false;
let checkApplicances = false;

function setList(listArray) {
	usetensilArray = [];
	appArray = [];
	ingredientArray = [];

	/* DOM */
	const usentensilList = document.getElementById('filter__box__usetensils__list');	
	const appList = document.getElementById('filter__box__appareils__list');
	const ingredientList = document.getElementById('filter__box__ingredient__list');
	
	/* REMPLISSAGE DES TABLEAUX */
	listArray.forEach((item) => {
		item.ustensils.forEach((use) => {
			usetensilArray.push(use);
		});
		appArray.push(item.appliance);
		item.ingredients.forEach((element) => {
			ingredientArray.push(element.ingredient);
		});
	});
	/* SUPPRIMER LES DOUBLONS */ 
	usetensilArray = [...new Set(usetensilArray)];
	appArray = [...new Set(appArray)];
	ingredientArray = [...new Set(ingredientArray)];

	/* AFFICHAGE */
	displayList(usentensilList, usetensilArray);
	displayList(appList, appArray);
	displayList(ingredientList, ingredientArray);
	createTag();
}
setList(newArray);

/* SELECTOR */
const usentensilsSelector = document.getElementById('ustensiles');
const appSelector = document.getElementById('appareils');
const ingredientSelector = document.getElementById('ingredients');

const boxIngreFilter = document.getElementById('filter__box__ingredients');
const boxAppFilter = document.getElementById('filter__box__appareils');
const boxUseFilter = document.getElementById('filter__box__usetensils');

function toggleFalse(element1, element2) {
	return [false, false]
}
function closeBox(box1, box2,selector1, selector2) { // permet de fermer un autre menu si il est ouvert
	selector1.classList.remove('active');
	selector2.classList.remove('active');
	box1.classList.add('hidden');
	box2.classList.add('hidden');
}
/* INGREDIENTS */
ingredientSelector.addEventListener('click', (e) => {
	[checkApplicances, checkUstensil] = toggleFalse(checkApplicances, checkUstensil);
	closeBox(boxAppFilter, boxUseFilter, appSelector, usentensilsSelector)
    checkIngredient = !checkIngredient;
	ingredientSelector.classList.toggle('active');
	boxIngreFilter.classList.toggle('hidden');	
});

/* APPARREILS */
	appSelector.addEventListener('click', (e) => {
		[checkApplicances, checkIngredient] = toggleFalse(checkApplicances, checkIngredient);
		closeBox(boxIngreFilter, boxUseFilter, ingredientSelector, usentensilsSelector);
		checkApplicances = !checkApplicances;
		appSelector.classList.toggle('active');
		boxAppFilter.classList.toggle('hidden'); 
	});
		
/* USETENSILES */
usentensilsSelector.addEventListener('click', (e) => {
	[checkApplicances, checkIngredient] = toggleFalse(checkApplicances, checkIngredient);
	closeBox(boxIngreFilter, boxAppFilter, ingredientSelector, appSelector);
	checkUstensil = !checkUstensil;
	console.log(checkApplicances);
	usentensilsSelector.classList.toggle('active');
	boxUseFilter.classList.toggle('hidden');
});

/* AFFICHAGE DES LISTES */
function displayList(target, array) {
    target.innerHTML=''
	array.forEach((item) => {
		array = [...new Set(array)];
		target.innerHTML += `<li class="filter__item">${item}</li>`;
	});
}

appSelector.addEventListener('keyup', (e) => {
	const searchKey = e.target.value;
	const input = e.target;
	const attribute = input.getAttribute('data-listType');
	searchFilter(searchKey, attribute);
});

usentensilsSelector.addEventListener('keyup', (e) => {
	const searchKey = e.target.value;
	const input = e.target;
	const attribute = input.getAttribute('data-listType');
	searchFilter(searchKey, attribute);
});

ingredientSelector.addEventListener('keyup', (e) => {
	const searchKey = e.target.value;
	const input = e.target;
	const attribute = input.getAttribute('data-listType');
	searchFilter(searchKey, attribute);
})

function searchFilter(keys,attribute) {
	let appItem
	if (attribute == 'appareils'){
		let list = document.getElementById('filter__box__appareils__list');
		appItem = list.querySelectorAll('.filter__item');
	}
	else if(attribute =='ustensiles'){
		let list = document.getElementById('filter__box__usetensils__list');
		appItem = list.querySelectorAll('.filter__item');
	}
	else{
		let list = document.getElementById('filter__box__ingredient__list');
		appItem = list.querySelectorAll('.filter__item');
	}
		if (keys.length != 0) {
			appItem.forEach((item) => {
				let oui = item.innerText;
				if (!oui.toLowerCase().includes(keys)) {
					item.style.display = 'none';
				} else {
					item.style.display = 'block';
				}
			});
		} else {
			appItem.forEach((item) =>{
				item.style.display = 'block';
			})
		}
}

function removeTwins(array) {
	array = [...new Set(array)];
}




/*
usentensilsSelector.addEventListener('click', (e) => {
	checkUstensil = !checkUstensil; 
	const boxFilter = document.getElementById('filter__box__usetensils');
	usentensilsSelector.classList.toggle('active');
	boxFilter.classList.toggle('hidden');
});

	appSelector.addEventListener('click', (e) => {
		checkApplicances = !checkApplicances;
		const boxFilter = document.getElementById('filter__box__appareils');
		appSelector.classList.toggle('active');
		boxFilter.classList.toggle('hidden'); 
	});
		
ingredientSelector.addEventListener('click', (e) => {
    checkIngredient = !checkIngredient;
	const boxFilter = document.getElementById('filter__box__ingredients');
	ingredientSelector.classList.toggle('active');
	boxFilter.classList.toggle('hidden');
	
});
*/