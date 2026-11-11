export { contactAddElement };
export const contactButton = document.querySelector("#contact");
function contactAddElement() {
   const content = document.querySelector("#content");
   content.textContent = "";
   const contactContainer = document.createElement("div");
   contactContainer.classList.add("contact-container");

   content.appendChild(contactContainer);
}
