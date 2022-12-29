const tagSelector = document.getElementById('tag');

const tagItems = document.querySelectorAll('.filter__item');


tagItems.forEach((item) =>{
    console.log(item);
    tagItems.addEventListener('click', (e) => {
			console.log(item);
		});
})

function addTag(toto) {
    let newTag = toto.target.textContent
    let tag = document.createElement('span')
    tag.classList.add('tag')
    tag.textContent = newTag;
    tagSelector.appendChild(tag)
}