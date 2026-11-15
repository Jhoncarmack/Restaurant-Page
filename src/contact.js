export { contactAddElement };
export const contactButton = document.querySelector("#contact");
function contactAddElement() {
   const content = document.querySelector("#content");
   content.textContent = "";
   const contactContainer = document.createElement("div");
   contactContainer.classList.add("contact-container");

   content.appendChild(contactContainer);

   const contactTitleContainer = document.createElement("div");
   contactTitleContainer.classList.add("contact-title-container");
   contactTitleContainer.textContent = "Holssi";
   contactContainer.appendChild(contactTitleContainer);

   const contactSummary = document.createElement("div");
   contactSummary.classList.add("contact-summary");
   contactContainer.appendChild(contactSummary);

   const contactUs0 = document.createElement("div");
   contactUs0.textContent = "CONTACT US";
   contactSummary.appendChild(contactUs0);
   const contactUs = document.createElement("div");

   contactUs.classList.add("contact-us");
   const contactShow1 = document.createElement("div");
   contactShow1.textContent = "For Business, Collaboration, and Career Inquiry";
   const contactParagraph = document.createElement("p");
   contactParagraph.classList.add("p");
   contactParagraph.textContent = "info@restaurant-holssi.com";

   const contactShow2 = document.createElement("div");
   contactShow2.textContent = "For Press Inquiry";
   const contactParagraph2 = document.createElement("p");
   contactParagraph2.classList.add("p");
   contactParagraph2.textContent = "pr@restaurant-holssi.com";

   const contactShow3 = document.createElement("div");
   contactShow3.textContent = "For Reservation";
   const contactParagraph3 = document.createElement("p");
   contactParagraph3.classList.add("p");
   contactParagraph3.textContent = "reservation@restaurant-holssi.com";
   contactShow1.appendChild(contactParagraph);
   contactShow2.appendChild(contactParagraph2);
   contactShow3.appendChild(contactParagraph3);
   contactUs.append(contactShow1, contactShow2, contactShow3);

   contactSummary.appendChild(contactUs);

   const menuFooter = document.createElement("div");
   menuFooter.classList.add("menu-footer");
   menuFooter.textContent = "© 2026 Holssi All rights reserved.";
   content.appendChild(menuFooter);
}
