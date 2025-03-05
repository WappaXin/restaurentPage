import "./../css/pageLoad.css";

export function pageLoad(div){

div.replaceChildren();
div.classList.remove("aboutPage" , "contactPage");

const div1 = document.createElement("div");
div1.classList.add("pageLoadDiv");
div.appendChild(div1);

const h1 = document.createElement("h1");
div1.appendChild(h1);
h1.textContent = "Ruchi";

const div11 = document.createElement("div");
div1.appendChild(div11);
div11.textContent = `Ruchi serves tradiotional indian food. \n No compromise on quality!. \n Satisfying your Ruchi is the main motto of ours.`  ;

}
