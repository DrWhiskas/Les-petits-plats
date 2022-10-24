  /* let myRequest = new Request("../data/recipes.json");
  fetch(myRequest)
    .then((res) => res.json())
    .then((data) => {
      data.recipes.forEach((media) => {
        console.log("oui");
      });
    });

    */

import { getRecipes } from "./pages/index_page";

export const toto = () =>{
    getRecipes().then(data => {
        oui()
    })
}


