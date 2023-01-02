const tagSelector = document.getElementById('tag');



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