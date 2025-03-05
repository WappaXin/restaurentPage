import "./../css/aboutPage.css" ;

export function aboutPageLoad(div){

    div.replaceChildren();

    div.classList.remove("contactPage");
    div.classList.add("aboutPage");

    const div1 = document.createElement("div");
    div.appendChild(div1);
    div1.classList.add("aboutPageDiv");

    const h1 = document.createElement("h1");
    div1.appendChild(h1);
    h1.textContent = "About" ;

    const p = document.createElement("p");
    div1.appendChild(p);

    p.textContent = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, 
                    debitis totam. Voluptas aperiam magni suscipit maiores dolorem, odio vel,
                    ut fugit, eligendi dolore quia mollitia consectetur hic placeat odit architecto.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, 
                    debitis totam. Voluptas aperiam magni suscipit maiores dolorem, odio vel,
                    ut fugit, eligendi dolore quia mollitia consectetur hic placeat odit architecto.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, 
                    debitis totam. Voluptas aperiam magni suscipit maiores dolorem, odio vel,
                    ut fugit, eligendi dolore quia mollitia consectetur hic placeat odit architecto.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, 
                    debitis totam. Voluptas aperiam magni suscipit maiores dolorem, odio vel,
                    ut fugit, eligendi dolore quia mollitia consectetur hic placeat odit architecto.`

}