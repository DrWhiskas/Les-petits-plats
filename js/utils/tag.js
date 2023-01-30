function createTag(){
    const tagSelector = document.getElementById('tag');
    const tagItems = document.querySelectorAll('.filter__item')
    let tagArray = []
    tagItems.forEach((item) => {
    item.addEventListener('click', (e) => {
       let text = e.target.textContent;
       tagArray.push(text)
       let tag = document.createElement('span')
        tag.classList.add('tag');
        if(checkUstensil == true){
            tag.style.backgroundColor = '#ED6454';
        }
        checkUstensil == false;
        if (checkApplicances == true){
            tag.style.backgroundColor = '#68D9A4';
        }
        checkApplicances == false
        if(checkIngredient == true){
            tag.style.backgroundColor = '#3282F7';
        }
        checkIngredient == false
		tag.innerHTML = `${text} <i class="fa-regular fa-circle-xmark"></i>`;
        item.remove();
        tagSelector.appendChild(tag)  
        tag.addEventListener('click',removeTag)         
        })
    })
}
function removeTag(event){
    let tag = event.target
    tag.parentNode.removeChild(tag);
}





/* => FACTORISER */
