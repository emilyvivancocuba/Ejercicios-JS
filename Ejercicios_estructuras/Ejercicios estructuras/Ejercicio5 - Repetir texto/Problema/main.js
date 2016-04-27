// Escribe aquí tu codigo Javascript

alert("REPETIR UN TEXTO");
var texto, num;
texto=prompt("Ingresa un texto cualquiera");
num=parseInt(prompt("Ingresa la cantidad de veces que quieres que se vea tu texto"));
for (var i = 1; i <=num; i++) {
	alert(texto +"    "+i);
}