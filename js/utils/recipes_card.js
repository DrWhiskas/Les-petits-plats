function recipesDisplay(recipesArray) {
	let n = 0; //incrementation recettes
	const recipesSection = document.getElementById('recipes');

	recipesArray.forEach((recipe) => {
		const recipesCard = document.createElement('article');
		recipesCard.classList = 'recipes__card';
		/* HEADER */
		const recipesHeader = document.createElement('header');
		recipesHeader.classList = 'recipes__card__header';
		recipesCard.appendChild(recipesHeader);
		/* ETAPES */
		const recipeStep = document.createElement('div');
		recipeStep.classList = 'recipes__card__list__description';
		recipeStep.innerHTML = `
    ${recipe.description}
  `;
		/* NAME */
		const recipesName = document.createElement('div');
		recipesName.classList = 'recipes__card__dish-name';
		recipesName.innerHTML = `
    <h3 class="recipes__card__dish__title">${recipe.name}</h3>
    <span class="recipes__card__dish__time"><i class="fa-regular fa-clock"></i>${recipe.time} min</span>
  `;
		const recipesIngredient = document.createElement('div');
		recipesIngredient.classList = 'recipes__ingredient';
		recipesCard.appendChild(recipesName);
		recipesCard.appendChild(recipesIngredient);
		for (let i = 0; i < recipe.ingredients.length; ) {
			const newIgredient = document.createElement('p');
			newIgredient.classList = 'recipes__card__list';
			newIgredient.innerHTML = `<span class="recipes__card__list__ingredients">${recipe.ingredients[i].ingredient} ${recipe.ingredients[i].quantity} ${recipe.ingredients[i].unit}</span>`;
			i++;
			recipesIngredient.appendChild(newIgredient);
		}

		recipesCard.appendChild(recipeStep);
		recipesSection.appendChild(recipesCard);
	});
}
recipesDisplay(recipes);
