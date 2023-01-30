let checkIngredient = false;
let checkUstensil = false;
let checkApplicances = false;

function setList() {
	usetensilArray = [];
	appArray = [];
	ingredientArray = [];

	/* DOM */
	const usentensilList = document.getElementById('filter__box__usetensils__list');	
	const appList = document.getElementById('filter__box__appareils__list');
	const ingredientList = document.getElementById('filter__box__ingredient__list');
	
	/* REMPLISSAGE DES TABLEAUX */
	newArray.forEach((item) => {
		item.ustensils.forEach((use) => {
			usetensilArray.push(use);
		})
		appArray.push(item.appliance);
		item.ingredients.forEach((element) => {
			ingredientArray.push(element.ingredient);
		})
	})

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
setList();

/* SELECTOR */
const usentensilsSelector = document.getElementById('ustensiles');
const appSelector = document.getElementById('appareils');
const ingredientSelector = document.getElementById('ingredients');


/* USETENSILES */
usentensilsSelector.addEventListener('click', (e) => {
	checkUstensil = !checkUstensil; 
	const boxFilter = document.getElementById('filter__box__usetensils');
	usentensilsSelector.classList.toggle('active');
	boxFilter.classList.toggle('hidden');
});

/* APPARREILS */
appSelector.addEventListener('click', (e) => {
    checkApplicances = !checkApplicances;
	const boxFilter = document.getElementById('filter__box__appareils');
	appSelector.classList.toggle('active');
	boxFilter.classList.toggle('hidden');          
});
	
/* INGREDIENTS */
ingredientSelector.addEventListener('click', (e) => {
    checkIngredient = !checkIngredient;
	const boxFilter = document.getElementById('filter__box__ingredients');
	ingredientSelector.classList.toggle('active');
	boxFilter.classList.toggle('hidden');
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
	 /* creer attribut html*/ 
	const searchKey = e.target.value;
    searchFilter(searchKey);

	});

usentensilsSelector.addEventListener('keyup', (e) => {
	const AKA = e.target.value;
	searchFilter(AKA);
});


function searchFilter(keys){
        let appItem = document.querySelectorAll('.filter__item')
    if(keys.length != 0){
        appItem.forEach((item) =>{
			let oui = item.innerText
			if (!oui.toLowerCase().includes(keys)) {
				item.style.display = 'none';
			}
			else{
				item.style.display = 'block';
			}
        })
    }
	else{
		appItem.style.display = "block"
	}
}

