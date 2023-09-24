let checkIngredient = false;
let checkUstensil = false;
let checkApplicances = false;

function toggleFalse(element1, element2) {
	return [false, false];
}
function closeBox(box1, box2, selector1, selector2) {
	// permet de fermer un autre menu si il est ouvert
	selector1.classList.remove('active');
	selector2.classList.remove('active');
	box1.classList.add('hidden');
	box2.classList.add('hidden');
}

/* SELECTOR */
const usentensilsSelector = document.getElementById('ustensiles');
const appSelector = document.getElementById('appareils');
const ingredientSelector = document.getElementById('ingredients');

const boxIngreFilter = document.getElementById('filter__box__ingredients');
const boxAppFilter = document.getElementById('filter__box__appareils');
const boxUseFilter = document.getElementById('filter__box__usetensils');

/* INGREDIENTS */
ingredientSelector.addEventListener('click', (e) => {
	[checkApplicances, checkUstensil] = toggleFalse(
		checkApplicances,
		checkUstensil
	);
	closeBox(boxAppFilter, boxUseFilter, appSelector, usentensilsSelector);
	checkIngredient = !checkIngredient;
	ingredientSelector.classList.toggle('active');
	boxIngreFilter.classList.toggle('hidden');
	const arrow = document.getElementById('arrow__ingredients');
	arrow.classList.toggle('rotate');
});

/* APPARREILS */
appSelector.addEventListener('click', (e) => {
	[checkApplicances, checkIngredient] = toggleFalse(
		checkApplicances,
		checkIngredient
	);
	closeBox(
		boxIngreFilter,
		boxUseFilter,
		ingredientSelector,
		usentensilsSelector
	);
	checkApplicances = !checkApplicances;
	const arrow = document.getElementById('arrow__appareils');
	arrow.classList.toggle('rotate');
	appSelector.classList.toggle('active');
	boxAppFilter.classList.toggle('hidden');
});

/* USETENSILES */
usentensilsSelector.addEventListener('click', (e) => {
	[checkApplicances, checkIngredient] = toggleFalse(
		checkApplicances,
		checkIngredient
	);
	closeBox(boxIngreFilter, boxAppFilter, ingredientSelector, appSelector);
	checkUstensil = !checkUstensil;
	console.log(checkApplicances);
	usentensilsSelector.classList.toggle('active');
	boxUseFilter.classList.toggle('hidden');
	const arrow = document.getElementById('arrow__usentesiles');
	arrow.classList.toggle('rotate');
});
