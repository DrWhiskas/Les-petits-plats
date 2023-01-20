function setList(){
    usetensilArray = []
    newArray.forEach((item) => {
        item.ustensils.forEach((use) =>{
            console.log(use);
            usetensilArray.push(use)
        })
        appArray.push(item.appliance);
	});
    /*item.ingredients.forEach((ingredient) =>{
        ingredientArray.push(ingredient)
    })*/
    usetensilArray = [...new Set(usetensilArray)];
    appArray = [...new Set(appArray)];

    console.log(usetensilArray , 'use');
    console.log(appArray , 'app');
    console.log(ingredientArray);

}
    setList();
/* SELECTOR */

/* USETENSILES */ 
const usentensilsSelector = document.getElementById('ustensiles');

usentensilsSelector.addEventListener('click', (e)=>{

    const boxFilter = document.getElementById('filter__box__usetensils');
    const usentensilList = document.getElementById(
			'filter__box__usetensils__list'
		);
    usentensilsSelector.classList.toggle('active')
    boxFilter.classList.toggle('hidden')
    console.log(usetensilArray,'sfldsmfjsdlfkj');
    displayList(usentensilList, usetensilArray);
    //displayList(usentensilList, usetensilArray);

})

/* APPARREILS */
const appSelector = document.getElementById('appareils');

    appSelector.addEventListener('click', (e) => {
	const boxFilter = document.getElementById('filter__box__appareils');
	const appilList = document.getElementById(
		'filter__box__appareils__list'
	);
	appSelector.classList.toggle('active');
	boxFilter.classList.toggle('hidden');
	console.log(testArray);
});

function displayList(target, array) {
	array.forEach((item) => {
         array = [...new Set(array)];
		target.innerHTML += `<li class="filter__item">${item}</li>`;
	});
}