import "./styles.css";
import { homeAddElement, homeButton } from "./Home.js";

import { menuAddElement, menuButton } from "./menu.js";
import { contactAddElement, contactButton } from "./contact.js";
if (process.env.NODE_ENV !== "production") {
   console.log("Looks like we are in development mode!");
}
homeAddElement();
homeButton.addEventListener("click", () => {
   homeAddElement();
});
menuButton.addEventListener("click", () => {
   menuAddElement();
});
contactButton.addEventListener("click", () => {
   contactAddElement();
});
