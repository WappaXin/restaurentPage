import "./css/index.css" ;

import {pageLoad} from './pageLoad.js' ;
import {aboutPageLoad} from './aboutPage.js' ;
import {contactPageLoad} from './contactPage.js';


function parentFunction(){
    
    const homeBtn = document.querySelector("#home");
    const aboutBtn = document.querySelector("#about");
    const contactBtn = document.querySelector("#contact");

    const contentDiv = document.querySelector("#content");
    
    pageLoad(contentDiv);

    homeBtn.addEventListener("click" , () => pageLoad(contentDiv));

    aboutBtn.addEventListener("click" , () => aboutPageLoad(contentDiv));

    contactBtn.addEventListener("click" , () => contactPageLoad(contentDiv));
}

parentFunction();



