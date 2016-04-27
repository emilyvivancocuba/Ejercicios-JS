// Escribe aquí tu codigo Javascript

alert("FACTORIAL DE UN NUMERO");
var fact=1;
var num=parseInt(prompt("Ingresa el número cuyo factorial quieres hallar"));
for (var i = 1; i <=num; i++) {
	fact*=i;
}
alert("El factorial del número ingresado es: "+fact);