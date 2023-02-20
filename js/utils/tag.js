/*  CREATION DES TAG */
function createTag(){
    const tagSelector = document.getElementById('tag');
    const tagItems = document.querySelectorAll('.filter__item')

    const usentensilList = document.getElementById('filter__box__usetensils__list');	
	const appList = document.getElementById('filter__box__appareils__list');
	const ingredientList = document.getElementById('filter__box__ingredient__list');

    let tagArray = []
    tagItems.forEach((item) => {
    item.addEventListener('click', (e) => {
       let text = e.target.textContent;
       let tag = document.createElement('span')
       let type
        tag.classList.add('tag');
        if(checkUstensil == true){
            type = 'usentensil_'
            tag.style.backgroundColor = '#ED6454';
        }
        checkUstensil == false;
        if (checkApplicances == true){
            type = 'appareil_'
            tag.style.backgroundColor = '#68D9A4';
        }
        checkApplicances == false
        if(checkIngredient == true){
            type = 'ingredient_'
            tag.style.backgroundColor = '#3282F7';
            tag.setAttribute('type', 'ingredient')
        }
        item.style.display = 'none';
        tagArray.push(`${type}${text}`);
        checkIngredient == false
		tag.innerHTML = `${text} <i class="fa-regular fa-circle-xmark"></i>`;
    
        // filtre du tag
        filterTag(tagArray);
        tagSelector.appendChild(tag)  
        /* CLIQUE POUR SUPPRIMER UN TAG ET LE REMETTRE DANS LA LISTE */
        tag.addEventListener('click', (e) => {
					let tagSelected = e.target;
					/*if (tagSelected.hasAttribute('type','ingredient')) {	
                    }*/
					removeTag(tag, tagArray, newArray);
				});
        })
        /* REMETTRE A ZERO SI LA LISTE DE TAG EST VIDE */
        
    })
}
/* RETIRER UN TAG */
function removeTag(tag, liste, toto) {
	tag.style.display = 'none'
     
    filterTag(liste);
    resetRecipes(); 
    recipesDisplay(newArray)
    setList(toto)
    console.log(toto);
    console.log(liste);
}
/* FILTRE LES TAG */
function filterTag(tags) {
	let newTag = [];
    let tagSelected = []
        newArray.forEach((recipe) => {
					tags.forEach((tag) => {
						if (tag.includes('appareil_')) {
							let tagSplit = tag.split('_')[1];
							if (tagSplit.includes(recipe.appliance)) {
								newTag.push(recipe);
								tagSelected.push({ tagSplit, type: 'appareil' });
							}
						} else if (tag.includes('usentensil_')) {
							let tagSplit = tag.split('_')[1];
							recipe.ustensils.forEach((usentesil) => {
								if (tagSplit.includes(usentesil)) {
									newTag.push(recipe);
									tagSelected.push({ tagSplit, type: 'usetensil' });
								}
							});
						} else {
							let tagSplit = tag.split('_')[1];
							recipe.ingredients.forEach((ingredient) => {
								if (tagSplit.includes(ingredient.ingredient)) {
									newTag.push(recipe);
									tagSelected.push({ tagSplit, type: 'ingredient' });
								}
							});
						}
					});
				});
                
                
    resetRecipes(); 
	recipesDisplay(newTag);
    setList(newTag);
}

/* => FACTORISER */
