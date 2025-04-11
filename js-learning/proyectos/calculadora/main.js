/*
ELEMENTOS:
- Array donde se guarden los elementos pulsados.
- Funcion calcular:
	- Identificar jerarquía de elementos: Se guarda una lista donde se encuentre el índice de los elementos, donde en la posición 0 esté el más importante
	- El resultado de este se guarda en una variable let, la cual se muestra en pantalla.
- Tiene que haber console.log en los elementos que se precien.
*/

document.addEventListener('DOMContentLoaded', () => {
	let elementos = [];
	document.addEventListener('click', (event) => {
		if(event.target.tagName === "BUTTON"){
			elementos.push(event.target.id);
			console.log(elementos);
		};

		// Antes de la función para calcular el resultado, tenemos que hacer una función que identifique elementos en el array.
		function find(elementoBuscar, elementoGuardado) {
			elementoGuardado = elementos.indexOf(elementoBuscar);
		}

		// Funcion para calcular
		function calcular() {
			console.log("");
		}

	});


})	
