/*
La primera opción para saber si un elemento está siendo pulsado, es escuchar a este elemento contínuamente.
Si fuera solo uno, sería factible, pero como son mas de 10, vamos a utilizar otra alternativa.
*/

document.addEventListener("DOMContentLoaded", () => {
	// Registar los números que se han pulsado y guardarlos en una variable
	var numeros_pulsados = [];
	document.addEventListener('click', (event) => {
		if (event.target.tagName === "BUTTON") {
			numeros_pulsados.push(event.target.id)
			console.log(numeros_pulsados)
		};
	});
});
