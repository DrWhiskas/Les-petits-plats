/* CREATION DES CARDS DES RECETTES */

/* HEADER */
function createCardHeader() {
	const recipesHeader = document.createElement('header');
	recipesHeader.classList = 'recipes__card__header';
	return recipesHeader;
}
/* NAME */
function createCardName(recipe) {
	const recipesName = document.createElement('div');
	recipesName.classList = 'recipes__card__dish-name';
	recipesName.innerHTML = `
    <h3 class="recipes__card__dish__title">${recipe.name}</h3>
    <span class="recipes__card__dish__time"><i class="fa-regular fa-clock"></i>${recipe.time} min</span>
  `;
	return recipesName;
}
function createCardMain(recipe){
	const recipeMain = document.createElement('div')
	recipeMain.classList.add('recipe__card__main')

	const recipeIngredients = createCardIngredients(recipe);
	recipeMain.appendChild(recipeIngredients);

  	const recipeSteps = createCardSteps(recipe);
	recipeMain.appendChild(recipeSteps);

	return recipeMain
}
function createCardIngredients(recipe) {
	const recipesIngredient = document.createElement('div');
	recipesIngredient.classList = 'recipes__ingredient';
	recipe.ingredients.forEach((ingredient) => {
		const newIngredient = document.createElement('p');
		newIngredient.classList = 'recipes__card__list';
		newIngredient.innerHTML = `
      <span class="recipes__card__list__ingredients">
        <strong>${ingredient.ingredient}</strong> : ${ingredient.quantity} ${ingredient.unit}
      </span>
    `;
		recipesIngredient.appendChild(newIngredient);
	});
	return recipesIngredient;
}

function createCardSteps(recipe) {
	const recipeStep = document.createElement('div');
	recipeStep.classList = 'recipes__card__list__description';
	recipeStep.innerHTML = `<p class="recipes__card__list__description__text">${recipe.description}</p>`;
	return recipeStep;
}

function createCard(recipe) {
	const recipesCard = document.createElement('article');
	recipesCard.classList = 'recipes__card';
	recipesCard.appendChild(createCardHeader());
	recipesCard.appendChild(createCardName(recipe));
	//recipesCard.appendChild(createCardIngredients(recipe));
	//recipesCard.appendChild(createCardSteps(recipe));
	recipesCard.appendChild(createCardMain(recipe))
	return recipesCard;
}

function recipesDisplay(recipesArray) {
	const recipesSection = document.getElementById('recipes');
	recipesArray.forEach((recipe) => {
		recipesSection.appendChild(createCard(recipe));
	});
	console.log(recipesArray);
}
recipesDisplay(recipes);