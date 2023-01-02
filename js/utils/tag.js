const tagSelector = document.getElementById('tag');


/*
function creatTag(){
const tagItems = document.querySelectorAll('.filter__item');
	tagItems.forEach((item) => {
		console.log(item);
		item.addEventListener('click', addTag)
})
}
function addTag(event) {
    let newTag = event.target.textContent;
    let tag = document.createElement('span')
    tag.classList.add('tag')
    tag.textContent = newTag;
    tagSelector.appendChild(tag)
}
*/
/*
function createTag(){
    let text = target.textContent
    let tag = document.createElement('span')
    tag.classList.add('tag');
	tag.textContent = text;
	
	document.body.appendChild(tag);
}
  function removeTag(event) {
		var tag = event.target;
		tag.parentNode.removeChild(tag);
	}
    */
   function createTag(){
    const tagItems = document.querySelectorAll('.filter__item')
    tagItems.forEach((item) => {
        item.addEventListener('click', (e) => {
           let text = e.target.textContent;
           let tag = document.createElement('span')
            tag.classList.add('tag');
		    tag.textContent = text;
            tag.addEventListener('click', removeTag);
           tagSelector.appendChild(tag)
           this.parentNode.removeChild(item)
           
        })
    })
   }
   function removeTag(event){
        let tag = event.target
        tag.parentNode.removeChild(tag);
   }