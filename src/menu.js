export { menuAddElement };
export const menuButton = document.querySelector("#menu");
function menuAddElement() {
   const content = document.querySelector("#content");
   content.textContent = "";

   const menuContainer = document.createElement("div");
   menuContainer.classList.add("menu-container");
   content.appendChild(menuContainer);

   const menuTitleContainer = document.createElement("div");
   menuTitleContainer.classList.add("menu-title-container");
   menuTitleContainer.textContent = "Holssi";
   menuContainer.appendChild(menuTitleContainer);

   const menuSummary = document.createElement("div");
   menuSummary.classList.add("menu-summary");
   menuContainer.appendChild(menuSummary);

   const starter = document.createElement("div");
   starter.classList.add("starter");
   menuSummary.appendChild(starter);

   const menuStarterTitle = document.createElement("div");
   menuStarterTitle.classList.add("menu-starter-title");
   menuStarterTitle.textContent = "Starter";
   starter.appendChild(menuStarterTitle);

   const entree = document.createElement("div");
   entree.classList.add("entree");
   menuSummary.appendChild(entree);

   const menuEntreeTitle = document.createElement("div");
   menuEntreeTitle.classList.add("menu-entree-title");
   menuEntreeTitle.textContent = "Entree";
   entree.appendChild(menuEntreeTitle);

   const appetizer = ["salad", "soup", "bread", "nacho"];
   for (let i = 0; i <= 3; i++) {
      const starterParagraph = document.createElement("p");
      if (appetizer[i] === "salad") {
         starterParagraph.textContent = `${appetizer[i]} : Crisp seasonal greens dressed in a delicate house vinaigrette.`;
      } else if (appetizer[i] === "soup") {
         starterParagraph.textContent = `${appetizer[i]} : Silky, slow-simmered velouté crafted from the finest seasonal ingredients.`;
      } else if (appetizer[i] === "bread") {
         starterParagraph.textContent = `${appetizer[i]} : Artisanal, house-baked bread served warm with cultured butter.`;
      } else {
         starterParagraph.textContent = `${appetizer[i]} : Crisp artisanal corn chips elevated with gourmet toppings and house-crafted salsa.`;
      }
      starter.appendChild(starterParagraph);
   }
   const menu = ["beefSteak", "lambSteak"];

   for (let i = 0; i <= 1; i++) {
      const menuParagraph = document.createElement("p");
      if (menu[i] === "beefSteak") {
         menuParagraph.textContent = `${menu[i]} : Prime dry-aged beef seared to perfection, finished with a rich red wine jus.`;
      } else {
         menuParagraph.textContent = `${menu[i]} : Tender, herb-crusted lamb rack accompanied by a delicate rosemary reduction.`;
      }
      entree.appendChild(menuParagraph);
   }

   const side = document.createElement("div");
   side.classList.add("side");
   menuSummary.appendChild(side);

   const sideTitle = document.createElement("div");
   sideTitle.textContent = "Side";
   side.appendChild(sideTitle);

   const sides = ["TrufflePurre", "WhiteAsparagus", "MisoCarrots"];
   for (let i = 0; i <= 2; i++) {
      const sidesParagraph = document.createElement("p");
      if (sides[i] === "TrufflePurre") {
         sidesParagraph.textContent = `${sides[i]} : Silky potato purée with butter and black truffle.`;
      } else if (sides[i] === "WhiteAsparagus") {
         sidesParagraph.textContent = `${sides[i]} : Gently blanched, served with nutty brown butter.`;
      } else {
         sidesParagraph.textContent = `${sides[i]} : Slow-roasted carrots glazed with miso butter. `;
      }
      side.appendChild(sidesParagraph);
   }

   const dessert = document.createElement("div");
   dessert.classList.add("dessert");
   menuSummary.appendChild(dessert);

   const dessertTitle = document.createElement("div");
   dessertTitle.textContent = "Dessert";
   dessert.appendChild(dessertTitle);

   const desserts = ["ChocolateSouffle", "YuzuPannaCotta", "TarteTatin"];

   for (let i = 0; i <= 2; i++) {
      const dessertParagraph = document.createElement("p");
      if (desserts[i] === "ChocolateSouffle") {
         dessertParagraph.textContent = `${desserts[i]} : Baked to order, with vanilla bean ice cream spooned in at the table. `;
      } else if (desserts[i] === "YuzuPannaCotta") {
         dessertParagraph.textContent = `${desserts[i]} : Vanilla panna cotta with yuzu jelly and berry compote.`;
      } else {
         dessertParagraph.textContent = `${desserts[i]} : Caramelized pear tart with salted caramel ice cream.`;
      }
      dessert.appendChild(dessertParagraph);
   }

   const beverages = document.createElement("div");
   beverages.classList.add("beverages");
   menuSummary.appendChild(beverages);

   const beveragesTitle = document.createElement("div");
   beveragesTitle.classList.add("beverages-title");
   beveragesTitle.textContent = "beverages";
   beverages.appendChild(beveragesTitle);

   const alcoholTitle = document.createElement("div");
   beverages.appendChild(alcoholTitle);
   alcoholTitle.textContent = "alcohol";
   alcoholTitle.classList.add("alcohol-title");

   const nonAlcoholTitle = document.createElement("div");
   beverages.appendChild(nonAlcoholTitle);
   nonAlcoholTitle.classList.add("non-alcohol-title");
   nonAlcoholTitle.textContent = "nonalcohol";

   const alcohol = document.createElement("div");
   alcoholTitle.appendChild(alcohol);

   const alcohols = ["PinotNoir", "Sauternes"];
   for (let i = 0; i <= 1; i++) {
      const alcoholParagraph = document.createElement("p");
      if (alcohols[i] === "PinotNoir") {
         alcoholParagraph.textContent = `${alcohols[i]} : Red fruit and soft tannins, great with duck or veal. `;
      } else {
         alcoholParagraph.textContent = `${alcohols[i]} : Honeyed dessert wine, lovely with foie gras or sweets.`;
      }
      alcohol.appendChild(alcoholParagraph);
   }

   const nonAlcohol = document.createElement("div");
   nonAlcoholTitle.appendChild(nonAlcohol);

   const nonAlcohols = ["YuzuTonic", "TeaPairing"];
   for (let i = 0; i <= 1; i++) {
      const nonAlcoholsParagraph = document.createElement("p");
      if (nonAlcohols[i] === "YuzuTonic") {
         nonAlcoholsParagraph.textContent = `${nonAlcohols[i]} : Citrusy mocktail with yuzu and rosemary. `;
      } else {
         nonAlcoholsParagraph.textContent = `${nonAlcohols[i]} : Oolong and pu-erh served to refresh the palate between courses. `;
      }
      nonAlcohol.appendChild(nonAlcoholsParagraph);
   }
   const menuFooter = document.createElement("div");
   menuFooter.classList.add("menu-footer");
   menuFooter.textContent = "© 2026 Holssi All rights reserved.";
   content.appendChild(menuFooter);
}
