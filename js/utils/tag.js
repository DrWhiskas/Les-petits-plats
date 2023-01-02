const tagSelector = document.getElementById('tag');

   function createTag(){
    const tagItems = document.querySelectorAll('.filter__item')
    tagItems.forEach((item) => {
        item.addEventListener('click', (e) => {
           let text = e.target.textContent;
           let tag = document.createElement('span')
            tag.classList.add('tag');
		    tag.innerHTML = `
                ${text} <i class="fa-regular fa-circle-xmark"></i>
            `;
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