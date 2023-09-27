/*  CREATION DES TAG */
let tagArray = [];
function createTag() {
	const tagSelector = document.getElementById('tag');
	let tagItems = document.querySelectorAll('.filter__item');
	tagItems.forEach((item) => {
		item.addEventListener('click', (e) => {
			let text = e.target.textContent;
			let tag = document.createElement('span');
			let type;
			tag.classList.add('tag');
			if (checkUstensil === true) {
				type = 'usentensil_';
				tag.style.backgroundColor = '#ED6454';
			}
			checkUstensil == false;
			if (checkApplicances == true) {
				type = 'appareil_';
				tag.style.backgroundColor = '#68D9A4';
			}
			checkApplicances == false;
			if (checkIngredient == true) {
				type = 'ingredient_';
				tag.style.backgroundColor = '#3282F7';
				tag.setAttribute('type', 'ingredient');
			}
			e.target.style.display = 'none';
			tagArray.push(`${type}${text}`);
			checkIngredient == false;
			tag.innerHTML = `${text}<i class="fa-regular fa-circle-xmark"></i>`;

			// filtre du tag
			filterTag(tagArray);
			tagSelector.appendChild(tag);
			/* CLIQUE POUR SUPPRIMER UN TAG ET LE REMETTRE DANS LA LISTE */
			tagItems = document.querySelectorAll('.filter__item');
			tagItems.forEach((newItem) => {
				if (newItem.innerText == e.target.innerText) {
					newItem.style.display = 'none';
				}
			});
			/* SUPPRIMER UN ELEMENT DE LA LISTE DES TAG */
			tag.addEventListener('click', (e) => {
				/* effacer l'element html*/
				tag.remove();
				tagArray.forEach((tagActivated, index) => {
					if (tagActivated.includes('appareil_')) {
						let tagSplit = tagActivated.split('_')[1];
						if (tag.innerText.includes(tagSplit)) {
							tagArray.splice(index, 1);
						}
					} else if (tagActivated.includes('usentensil_')) {
						let tagSplit = tagActivated.split('_')[1];
						if (tag.innerText.includes(tagSplit)) {
							tagArray.splice(index, 1);
						}
					} else {
						let tagSplit = tagActivated.split('_')[1];
						if (tag.innerText.includes(tagSplit)) {
							tagArray.splice(index, 1);
						}
					}
				});
				filterTag(tagArray);
			});
		});
	});
}
/* RETIRER UN TAG */

/* FILTRE LES TAG */
function filterTag(tags) {
	let newTag = [];
	newArray.forEach((recipe) => {
		let checkRecipe = true;
		tags.forEach((tag) => {
			let checkTag = false;
			if (tag.includes('appareil_')) {
				let tagSplit = tag.split('_')[1];
				if (recipe.appliance.includes(tagSplit)) {
					checkTag = true;
				}
			} else if (tag.includes('usentensil_')) {
				let tagSplit = tag.split('_')[1];
				recipe.ustensils.forEach((ustensil) => {
					if (ustensil.includes(tagSplit)) {
						checkTag = true;
					}
				});
			} else {
				let tagSplit = tag.split('_')[1];
				recipe.ingredients.forEach((ingredient) => {
					if (ingredient.ingredient.includes(tagSplit)) {
						checkTag = true;
					}
				});
			}
			if (checkTag == false) {
				checkRecipe = false;
			}
		});
		if (checkRecipe == true) {
			newTag.push(recipe);
		}
	});
	resetRecipes();
	recipesDisplay(newTag);
	setList(newTag);
}
