/*let i = 0
let n = 0

recipesList.forEach(()=>{
  i++
  recipesList[i].ingredients.forEach(()=>{
    console.log(recipes[i].ingredients[n].ingredient);
    n++
  })
})
*/

/*let i = 0
let n = 0
  const recipesContent = document.getElementById("recipes");
console.log(recipes[0].ingredients.length);
recipesList.forEach(()=>{
  console.log(recipes[n].name);
  console.log(recipes[n].ingredients[i].ingredient);
  const recipesItem = document.createElement("article");
  recipesItem.className = "recipes__content";
  recipesItem.innerHTML = `
    <p>${recipes[n].ingredients[i].ingredient}</p>
  `;
  i++
      if (i >= recipes[n].ingredients.length) {
        i = 0;
        n++;
        console.log(n);
      }
      recipesContent.appendChild(recipesItem);
})
*/
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

/*for(let i = 0; i< recipesList.length ; i++){
  console.log("nom de recette à " + i + " est " + recipesList[i].name);
}*/
let i =0
let n = 0
  const recipesContent = document.getElementById("recipes");

for(; n < recipesList[i].ingredients.length; n++)
{
  const recipesItem = document.createElement("article");
  recipesItem.className = "recipes__content";
  recipesItem.innerHTML = `
    <p>${recipesList[i].ingredients[n].ingredient}</p>
  `;
recipesContent.appendChild(recipesItem)
  console.log(recipesList[i].ingredients[n].ingredient)
  if(n >=  recipesList[i].ingredients.length -1 ){
    n = 0
    i += 1
  }
}  