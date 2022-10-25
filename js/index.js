let i = 0
let n = 0

for(;;i++){
  for(;n<=i;n++){
    console.log(recipes[i].ingredients[n].ingredient)
    }
}
/* CREATION DES CARD */
/*
function recipesDOM(){
  const recipesContent = document.getElementById("recipes");
  recipesList.forEach((media) => {
    const recipesItem = document.createElement("article");
    recipesItem.className = "recipes__content";
    recipesItem.innerHTML = `
      <div class="recipes__content__item">
        <h2 class="recipes__content__item__title">${recipesList[i].name}</h2>
        <div class="recipes__content__item__time">${recipesList[i].time} min</div>
        <p class="recipes__content__item__ingredient">${recipesList[i].ingredients[n].ingredient}</p>
        <p class="recipes__content__item__preparation"></p>
      </div>
    `;
    i++

    n++

    recipesContent.appendChild(recipesItem);
  });
} 
recipesDOM();
*/
//recipesItem.innerHTML = ` <div> ${recipes[i].name}</div>`;i++ => afficher les info