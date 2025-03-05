import "./../css/contactPage.css" ;

export function contactPageLoad(div){
    
    div.replaceChildren();

    div.classList.remove("aboutPage")
    div.classList.add("contactPage");

    const div1 = document.createElement("div");
    div.appendChild(div1);
    div1.classList.add("contactPageDiv");

    const p1 = document.createElement("p");
    div1.appendChild(p1);
    p1.textContent = "Email: ruchi@fakemail.com";

    const p2 = document.createElement("p");
    div1.appendChild(p2);
    p2.textContent = "Phone Number: 70681706813720429";
}