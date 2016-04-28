// Escribe aquí tu codigo Javascript

alert("MAYUSCULAS O MINUSCULAS");
function palindromo(frase){
	var letras=((((frase.toLowerCase()).split(" ")).join("")).split(""));
	console.log(letras);
	var i=0;
	var suma=0;
	for (var i = 0; i <=letras.length; i++) {
		if (letras[i]===letras[(letras.length - 1)]) {
			suma+=1;
		}else{
			suma=0;
		}
	}
	if (suma===letras.length - 2) {
		alert("El texto ingresado es PALINDROMO");
	}else{
		alert("el texto ingresado no es PALINDROMO");
	}
}
var frase=prompt("Ingresa un texto PALINDROMO para validarla");
palindromo(frase);