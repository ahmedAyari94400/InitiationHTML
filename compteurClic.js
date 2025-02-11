
// On déclare une constante qui contient notre bouton
const button = document.getElementById("btn");
// On déclare une variable pour récupérer le nombre de clics
let pClic =document.getElementById("pClic");
let nbClic = 0;
//On ajoute un évenement pour récupérer le clique sur le bouton
button.addEventListener("click", () => {  // On utilise une fonction fléchée
    
    nbClic++; // On incrémente le nombre de clique
    pClic.textContent = `${nbClic}`; // on affiche le nombre de clique dans notre page
});