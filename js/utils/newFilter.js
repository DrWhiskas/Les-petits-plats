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
