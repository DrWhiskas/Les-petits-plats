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
        
        console.log(tagArray);
        checkIngredient == false
		tag.innerHTML = `${text} <i class="fa-regular fa-circle-xmark"></i>`;
        item.remove();
        tagSelector.appendChild(tag)  
        tag.addEventListener('click',removeTag)         
        })
    })
    tagArray.forEach((element) =>{
        console.log(element);
    })
}
function removeTag(e){
    let tag = e.target
    if(tag.include('usentensil')){
        console.log("oui");
    }
    else{
        console.log('non');
    }
    let tagSplit = tag.textContent.split('_')[0]
    tag.parentNode.removeChild(tag);
}

/* => FACTORISER */
