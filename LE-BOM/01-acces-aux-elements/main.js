//BOM = Browser Oject Model
//Structure harborescente de la page html, c'est le squelette de la page et c'est sur ce squelette là que le JavaScript va utiliser pour travailler.

//   1/COMMENT RECUPERER LES INFORMATIONS SUR UNE PAGE HTML

//Récupérer un element OU une liste d'élement a partir de son element selecteur css, id, ou class

//let linkTags = document.getElementsByTagName('a');
//console.log(linkTags);
//let titreHeader = document.getElementById("titreHeader");
//console.log(titreHeader);
//let elementnav = document.getElementsByClassName("nav-item");
//console.log(elementnav);

//récupérer un element à partir de querySelector ne recupère que le premier element qu'il rencontre.
//let selectlien = document.querySelector("a");
//console.log(selectlien);

//récupérer un element à partir de querySelector pour afficher tout les élements par liste de noeux.
//let selectlien2 = document.querySelectorAll("p a"); tout les a dans un paragraphe
//console.log(selectlien2);

//console.log(document); affichera tout l'harborescence
//console.log(window)  ;affichera tout les navigateur
//console.log(window.screen);affichera les différent élement du screen
//console.log(window.history); afficherat l'history de navigation
//ils commencent tous par une {} car c'est des objet'

//..............//

//RECUPERER LE PREMIER ELEMENT

//let premierh1 = document.querySelector("h1")
//console.log(premierh1); EN ACCEDE DIRECT AU PREMIER ELEMENT

//let premierh1 = document.getElementsByTagName("h1")
//console.log(premierh1[0]); ON CIBLE LE PREMIER h1 CAR ON A DEMANDER TOUT LES ELEMENT


//RECUPERER LE CONTENU D'UN ELEMENT
//let premierh1 = document.querySelector("h1")
//console.log(premierh1.innerText); ===>innerText=attribue
//OU
//console.log(premierh1.innerHTML); il peut interpreter les balises html en plus
//OU
//console.log(premierh1.textContent);


//MODIFIER LE TEXT DE BALISE H1
//premierh1.textContent="text modifier par Mirna"; modiffira le text h1 dans la page html
//premierh1.innerText="text modifier par Mirna"; modiffira le text h1 dans la page html
//premierh1.innerHTML="<div style = 'color: red> text modifier par Mirna</div>"; modiffira le text h1 dans la page html et son background.


//document.querySelector("a").innerHTML ="https://www.google.com/search?q=wikipedia&rlz=1C1CHBD_frFR915FR915&oq=wi&aqs=chrome.1.69i57j69i59j0l3j46j0l2.3365j0j7&sourceid=chrome&ie=UTF-8";
//ne change que le text
//let lienA = document.querySelector("a");
//lienA.textContent = document.querySelector("a").innerHTML
//lienA.href= "https://www.google.com/search?q=wikipedia&rlz=1C1CHBD_frFR915FR915&oq=wi&aqs=chrome.1.69i57j69i59j0l3j46j0l2.3365j0j7&sourceid=chrome&ie=UTF-8"
//change le text et le lien.

//MODIFFIER UNE PROPRIETE ON UTILISE LE . +la propriété
//pemierh1.style.color="teal";
//premierh1.style.fontSize="5rem"

let navItemLink = document.getElementsByClassName("nav-link");
console.log(navItemLink);

navItemLink[4].innerHTML="Lien 4";
navItemLink[5].innerHTML="Lien 5";
navItemLink[6].innerHTML="Lien 6";

navItemLink[6].className = "nav-link";



