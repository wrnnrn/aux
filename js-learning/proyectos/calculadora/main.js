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
		if(event.target.tagName === "BUTTON" && event.target.id !== 'borrar' && event.target.id !== 'igual'){
			event.preventDefault(); // Para evitar la acción de ctrl + p
			elementos.push(event.target.id);
			console.log(elementos);
		};

	let borrar = document.getElementById("borrar");
	borrar.addEventListener('click', () => {
		elementos.length = 0
		console.log(elementos)
	})
		// Antes de la función para calcular el resultado, tenemos que hacer una función que identifique elementos en el array.
		function operar() {
			// 1 - Encontrar elementos de jerarquía --> * y /

			if(elementos.includes("*") || elementos.includes("/")) {
				let multiplicacion = [];
				multiplicacion = elementos.indexOf("*");
				let division = [];
				division = elementos.indexOf("/");
				console.log('Multiplicación: ' + multiplicacion + ' División: ' + division);
			}

			// Funcion para buscar un elemento -> lista.indexOf(elemento)

		}


		// Funcion para calcular
		let igual = document.getElementById("igual")
		igual.addEventListener('click', () => {
			if (elementos.length == 0) {
				print("No se ha pulsado ningún elemento");
			} else {
				operar();
			}
		})

	});


})	
