// import restaurantImage from "./restaurant_one.jpg";

export { homeAddElement };
export const homeButton = document.querySelector("#home");
function homeAddElement() {
   const content = document.querySelector("#content");
   content.textContent = "";
   // const image = document.createElement("img");

   // image.src = restaurantImage;

   // content.appendChild(image);
   const homeContainer = document.createElement("div");
   homeContainer.classList.add("home-container");
   content.appendChild(homeContainer);

   const homeTitleContainer = document.createElement("div");
   homeTitleContainer.classList.add("home-title-container");
   homeTitleContainer.textContent = "Holssi";
   homeContainer.appendChild(homeTitleContainer);

   const homeSummary = document.createElement("div");

   homeContainer.appendChild(homeSummary);
   homeSummary.classList.add("home-summary");

   const homeDescription = document.createElement("div");
   homeDescription.classList.add("home-description");
   homeSummary.appendChild(homeDescription);
   const homeDescriptionParagraph = document.createElement("p");
   const homeDescriptionParagraph2 = document.createElement("p");

   homeDescription.appendChild(homeDescriptionParagraph);
   homeDescription.appendChild(homeDescriptionParagraph2);
   homeDescriptionParagraph.textContent =
      "민들레 홀씨가 바람을 타고 퍼지는 모습에서 따온 이름입니다.";
   homeDescriptionParagraph2.textContent =
      "한 번 온 손님이 저희 식당 이야기를 지인에게 전해 주시면,그 홀씨는 또 다른 한 사람을 만나고, 그렇게 계속 퍼져 나갑니다. 바람에 실려 온 인연들이 이곳에서 따뜻한 추억으로 피어나길 바랍니다. ";

   const homeHour = document.createElement("div");
   homeHour.classList.add("home-hour");
   const homeHourTitle = document.createElement("div");
   homeHourTitle.textContent = "Hours";
   homeHour.appendChild(homeHourTitle);

   const value = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
   ];
   for (let i = 0; i <= 6; i++) {
      const homeHourParagraph = document.createElement("p");

      if (
         value[i] === "Monday" ||
         value[i] === "Tuesday" ||
         value[i] === "Wednesday"
      ) {
         homeHourParagraph.textContent = `${value[i]}: 6am - 6pm`;
      } else if (value[i] === "Thursday" || value[i] === "Friday") {
         homeHourParagraph.textContent = `${value[i]}: 6am - 10pm`;
      } else if (value[i] === "Saturday") {
         homeHourParagraph.textContent = `${value[i]}: 8am - 10pm`;
      } else {
         homeHourParagraph.textContent = `${value[i]}: 8am - 8pm`;
      }

      homeHour.appendChild(homeHourParagraph);
      homeSummary.appendChild(homeHour);
   }
   const homeLocation = document.createElement("div");
   const homeLocationTitle = document.createElement("div");
   homeLocationTitle.textContent = "Location";
   homeLocation.appendChild(homeLocationTitle);
   const homeLocationParagraph = document.createElement("p");
   homeLocation.appendChild(homeLocationParagraph);
   homeLocationParagraph.textContent = "충청남도 천안시 불당동 123";
   homeLocation.classList.add("home-location");

   homeSummary.appendChild(homeLocation);

   const homeFooter = document.createElement("div");
   homeFooter.classList.add("home-footer");
   homeFooter.textContent = "© 2026 Holssi All rights reserved.";
   content.appendChild(homeFooter);
}
