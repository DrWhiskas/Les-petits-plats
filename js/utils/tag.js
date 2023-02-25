/*  CREATION DES TAG */
let tagArray = [];
function createTag(){
    const tagSelector = document.getElementById('tag');
    let tagItems = document.querySelectorAll('.filter__item')

    const usentensilList = document.getElementById('filter__box__usetensils__list');	
	const appList = document.getElementById('filter__box__appareils__list');
	const ingredientList = document.getElementById('filter__box__ingredient__list');

    
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
        
        tagArray.push(`${type}${text}`);
        checkIngredient == false
		tag.innerHTML = `${text} <i class="fa-regular fa-circle-xmark"></i>`;
    
        // filtre du tag
        filterTag(tagArray);
        e.target.style.display = 'none';

        

        tagSelector.appendChild(tag)  
        /* CLIQUE POUR SUPPRIMER UN TAG ET LE REMETTRE DANS LA LISTE */
        tag.addEventListener('click', (e) => {
					//removeTag(tag);
		    });

            tagItems = document.querySelectorAll('.filter__item');
						tagItems.forEach((newItem) => {
                            let a = newItem.innerText;
                            let b = e.target.innerText;
							if (a == b) {
								newItem.style.display = 'none';
							}
						});
        })
        /* REMETTRE A ZERO SI LA LISTE DE TAG EST VIDE */
        
    })

}
/* RETIRER UN TAG */

/* FILTRE LES TAG */
function filterTag(tags) {
	let newTag = [];
    let tagSelected = []
        newArray.forEach((recipe) => {
            let checkRecipe = true 
					tags.forEach((tag) => {
                        let checkTag = false
						if (tag.includes('appareil_')) {
							let tagSplit = tag.split('_')[1];
							if (tagSplit.includes(recipe.appliance)) {
								checkTag = true
							}
						} else if (tag.includes('usentensil_')) {
							let tagSplit = tag.split('_')[1];
							recipe.ustensils.forEach((usentesil) => {
								if (tagSplit.includes(usentesil)) {
									checkTag = true;
								}
							});
						} else {
							let tagSplit = tag.split('_')[1];
							recipe.ingredients.forEach((ingredient) => {
								if (tagSplit.includes(ingredient.ingredient)) {
									checkTag = true;
								}
							});
						}
                        if(checkTag == false){
                        checkRecipe = false
                    }
					});
                    if(checkRecipe == true){
                    newTag.push(recipe)
                }
				});  
    resetRecipes(); 
	recipesDisplay(newTag);
    setList(newTag);
}

/* => FACTORISER */
