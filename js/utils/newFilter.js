let checkIngredient = false;
let checkUstensil = false;
let checkApplicances = false;

function setList() {
	usetensilArray = [];
	appArray = [];
	ingredientArray = [];
	newArray.forEach((item) => {
		item.ustensils.forEach((use) => {
			usetensilArray.push(use);
		});
		appArray.push(item.appliance);
		item.ingredients.forEach((ingredient) => {
			ingredientArray.push(ingredient);
		});
	});
	usetensilArray = [...new Set(usetensilArray)];
	appArray = [...new Set(appArray)];
	ingredientArray = [...new Set(ingredientArray)];
	//createTag();
}
setList();

/* SELECTOR */

/* USETENSILES */
const usentensilsSelector = document.getElementById('ustensiles');
    
	usentensilsSelector.addEventListener('click', (e) => {
        checkUstensil = !checkUstensil; 
		const boxFilter = document.getElementById('filter__box__usetensils');
		const usentensilList = document.getElementById(
			'filter__box__usetensils__list'
		);
		usentensilsSelector.classList.toggle('active');
		boxFilter.classList.toggle('hidden');
		displayList(usentensilList, usetensilArray);
		createTag();
	});

/* APPARREILS */
const appSelector = document.getElementById('appareils');


    appSelector.addEventListener('click', (e) => {
        checkApplicances = !checkApplicances;
    	console.log(checkApplicances);
    	const boxFilter = document.getElementById('filter__box__appareils');
    	const appList = document.getElementById('filter__box__appareils__list');
    	appSelector.classList.toggle('active');
    	boxFilter.classList.toggle('hidden');
    	displayList(appList, appArray);
        createTag()        
    });

/* INGREDIENTS */
const ingredientSelector = document.getElementById('ingredients');

ingredientSelector.addEventListener('click', (e) => {
    checkIngredient = !checkIngredient;
	const boxFilter = document.getElementById('filter__box__ingredients');
	const ingredientList = document.getElementById(
		'filter__box__ingredient__list'
	);
	ingredientSelector.classList.toggle('active');
	boxFilter.classList.toggle('hidden');
	displayList(ingredientList, ingredientArray);
});

function displayList(target, array) {
    target.innerHTML=''
	array.forEach((item) => {
		array = [...new Set(array)];
		target.innerHTML += `<li class="filter__item">${item}</li>`;
	});
}

appSelector.addEventListener('keyup', (e) => {
	const searchKey = e.target.value;
    searchFilter(searchKey);
	});




function searchFilter(keys){
        let appItem = document.querySelectorAll('.filter__item')
    if(keys.length != 0){
        appItem.forEach((item) =>{
			let oui = item.innerText
			if (oui.toLowerCase().includes(keys)) {
				console.log("oui");
			}
			else{
				
			}
		//}
        })
    }
}

