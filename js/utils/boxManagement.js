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

function toggleArrow(arrow1, arrow2, arrow3) {
	arrow1.classList.toggle('rotate');
	arrow2.classList.remove('rotate');
	arrow3.classList.remove('rotate');
}
/* DOM SELECTOR */
const usentensilsSelector = document.getElementById('ustensiles');
const appSelector = document.getElementById('appareils');
const ingredientSelector = document.getElementById('ingredients');

/* DOM BOX */
const boxIngreFilter = document.getElementById('filter__box__ingredients');
const boxAppFilter = document.getElementById('filter__box__appareils');
const boxUseFilter = document.getElementById('filter__box__usetensils');

/* DOM ARROW */
const arrowIng = document.getElementById('arrow__ingredients');
const arrowApp = document.getElementById('arrow__appareils');
const arrowUse = document.getElementById('arrow__usentesiles');

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
	toggleArrow(arrowIng, arrowApp, arrowUse);
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
	appSelector.classList.toggle('active');
	boxAppFilter.classList.toggle('hidden');
	toggleArrow(arrowApp, arrowIng, arrowUse);
});

/* USETENSILES */
usentensilsSelector.addEventListener('click', (e) => {
	[checkApplicances, checkIngredient] = toggleFalse(
		checkApplicances,
		checkIngredient
	);
	closeBox(boxIngreFilter, boxAppFilter, ingredientSelector, appSelector);
	checkUstensil = !checkUstensil;
	usentensilsSelector.classList.toggle('active');
	boxUseFilter.classList.toggle('hidden');

	toggleArrow(arrowUse, arrowIng, arrowApp);
});
