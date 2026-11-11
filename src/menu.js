export { menuAddElement };
export const menuButton = document.querySelector("#menu");
function menuAddElement() {
   const content = document.querySelector("#content");
   content.textContent = "";
   const menuContainer = document.createElement("div");
   content.appendChild(menuContainer);

   menuContainer.classList.add("menu-container");
}
