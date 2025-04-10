COSAS HECHAS
- Botones de la calculadora
- Detectar igual
- Detectar elementos pulsados

COSAS POR HACER
- Orden de jerarquía
- Operar elementos según orden de jerarquía
- Imprimir por pantalla
- Depurar
*/


document.addEventListener("DOMContentLoaded", () => {
	// Registar los números que se han pulsado y guardarlos en una variable
	var elementos_pulsados = [];
	document.addEventListener('click', (event) => {
		if (event.target.tagName === "BUTTON") {
			elementos_pulsados.push(event.target.id)
			console.log(elementos_pulsados)
		};
	});

	const resultado = document.getElementById("resultado");
	resultado.textContent = elementos_pulsados
	
	// Hay que hacer un condicional al pulsar igual para operar los elementos
	// Para operar hay que establecer el orden de jerarquía.

	// Condicional para el igual
	var igual = document.getElementById("igual")
	igual.addEventListener("click", () => {
		operar()
	})

	function jerarquia() {
		let resultado = []
		if (elementos_pulsados.includes("*")) {
			
			let elementos = [] // Se utiliza let para que solo sea vigente en este bloque
			let i = 0
			while (i !== -1) { // Cuando un elemento no pertenece a la lista, el resultado del indexOf es -1.
				elementos.push(i)
				i = elementos_pulsados.indexOf("*", i+1)
			}
			
			// Operamos la multiplicación
			// Los elementos de los laterales de la multip, se operan.

			let j
			while(elementos > 0){
				resultado.push(elementos_pulsados[elementos[j-1]]*elementos_pulsados[elementos[j+1]])
				elementos.splice(0, 1)
			}
		}

	}
		// Orden de jerarquía de las operaciones
		// Detectar en la lista los elementos
		// Si hay * o /, operar con sus elementos laterales
		// Si hay /*, error de sintaxis
		function signos(){
			alert("signos")
			// Para los signos de suma y resta
		}
	
	function operar() {
		jerarquia()
		alert("Igual pulsado")
		elementos_pulsados.length = 0
		// Operar con los elementos de la lista y usando la jerarquía
	}

	}
  
