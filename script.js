// #Mettre à jour les variables CSS avec JS

// ##Travail Demander :
// créer un script en Javascript qui modifie
// les paramètres de l'image : Niveaux de gris, Teinte, Ombre,
// l'espacement, et le Brouiller. en récupérant la valeur de souris.

let inputs = document.querySelectorAll('.left input');

function handleUpdate() {
	const suffix = this.dataset.sizing || '';

	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
inputs.forEach((input) => input.addEventListener('change', handleUpdate));
inputs.forEach((input) => input.addEventListener('mousemove', handleUpdate));
