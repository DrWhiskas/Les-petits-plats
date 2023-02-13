function createTag(){
    const tagSelector = document.getElementById('tag');
    const tagItems = document.querySelectorAll('.filter__item')
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
        }
        tagArray.push(`${type}${text}`);
        checkIngredient == false
		tag.innerHTML = `${text} <i class="fa-regular fa-circle-xmark"></i>`;
        item.style.display = 'none'
        // filtre du tag
        filterTag(tagArray, tagItems);
        tagSelector.appendChild(tag)  
        //tag.addEventListener('click',removeTag)
        })
    })
}
/*
function removeTag(e){
    let tag = e.target
    let text = tag.textContent
    let tagSplit = tag.textContent.split('_')[0]
    tag.parentNode.removeChild(tag);
}
*/
function filterTag(tags, listTag) {
	let newTag = [];
	newArray.forEach((recipe) => {
		tags.forEach((tag) => {
			if (tag.includes('appareil_')) {
				let tagSplit = tag.split('_')[1];
				if (tagSplit.includes(recipe.appliance)) {
					newTag.push(recipe);
				}
			} else if (tag.includes('usentensil_')) {
				let tagSplit = tag.split('_')[1];
				recipe.ustensils.forEach((usentesil) => {
					if (tagSplit.includes(usentesil)) {
						newTag.push(recipe);
					}
				});
			} else {
				let tagSplit = tag.split('_')[1];
				if (tagSplit.includes(recipe.appliance)) {
					recipe.ingredients.forEach((ingredient) => {
						newTag.push(ingredient);
					});
				}
			}
		});
	});
	newArray = [];
	newTag.forEach((tag) => {
		newArray.push(tag);
		removeTwins(newArray);
	});
	resetRecipes();
	newArray.forEach((recipe) => {
		listTag.forEach((tag) => {
			let listTagText = tag.textContent;
            console.log(recipe.appliance);
            let oui = recipe.appliance.forEach
			if (!listTagText.includes(recipe.appliance)) {
				recipe.ustensils.forEach((usentesil) =>{
                    if(!listTagText.includes(usentesil)){
                        recipe.ingredients.forEach((ingredient) =>{
                            if(!listTagText.includes(ingredient)){
                                tag.style.display = 'none';
                            }
                        })
                    }
                })
			}
            else{
                console.log('oui');
            }
		});
	});
	recipesDisplay(newArray);
}

/* => FACTORISER */
