const body = document.body;

setInterval(rainFall, 3); // prend 2 param : la fonction qu'on veut faire partir et la fréquence

function rainFall() {
  const waterDrop = document.createElement("i"); // A chaque fois que j'appelle waterDrop une balise <i> sera injecté dans mon html/ I pour icone
  waterDrop.classList.add("fas"); // J'injecte la class de fontawesome
  waterDrop.classList.add("fa-tint"); // Et la je vais chercher la class qui m'interesse dans fontawsome
  waterDrop.style.fontSize = Math.random() * 7 + "px"; // Ici je param la taille des gouttes entre 1 et 7px de manière aléatoire
  waterDrop.style.animationDuration = Math.random() * 2 + "s"; // Ici je param la durée de l'animation
  waterDrop.style.opacity = Math.random() + 0.3; //Opacité entre 0.3 et 1
  waterDrop.style.left = Math.random() * window.innerWidth + "px"; // vu qu'il est en absolute on va jouer sur les left pour le postionner. DOnc le résultat de math.random X la largeur de la window
  body.appendChild(waterDrop); // ici je créer dans le body le waterdrop

  setTimeout(() => {
    waterDrop.remove();
  }, 6000); // au bout de 6 secondes tu tues waterDrop, si non ça me fera un dome avecune infinité de <i>
}

//12
