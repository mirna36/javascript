//supprimer un élement: supprimer le titre h1
let titre_h1 = document.getElementById("grosTitre")
let parent = document.body;
//parent.removeChild(titre_h1);

//CReer un nouveau titre
let newTitre = document.createElement("h2");
newTitre.id = "titreMoyen"
newTitre.textContent = "Les Experts en JavaScript"
newTitre.style.color="orange";
parent.replaceChild(newTitre, titre_h1);