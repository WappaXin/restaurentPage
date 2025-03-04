import desiFood from './images/desi-food.jpg' ;
import "./css/pageLoad.css";

export function pageLoad(div){

div.replaceChildren();

const image = document.createElement("img");

image.classList.add("desiFoodImage");
image.src = desiFood;
div.appendChild(image);

}
