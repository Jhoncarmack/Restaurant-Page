import "./styles.css";
import restaurantImage from "./restaurant_one.jpg";

const image = document.createElement("img");

image.src = restaurantImage;
const body = document.querySelector("body");
const content = document.querySelector("#content");
const homeButton = document.createElement("button");
const menuButton = document.createElement("button");

const contactButton = document.createElement("button");
homeButton.textContent = "Home";
menuButton.textContent = "Menu";
contactButton.textContent = "Contact";
const nav = document.querySelector("nav");
nav.append(homeButton, menuButton, contactButton);

body.appendChild(content);
content.appendChild(image);
