// Escribe aquí tu codigo Javascript
alert("LISTAS DE VALORES");
var valor=["primer", "segundo", "tercer"];
var suma1, suma2;
suma1, suma2=0;
for (var i = 1; i <=3; i++) {
	var num1=parseInt(prompt("Ingrese el "+valor[i-1]+" valor de la primera lista "))
	suma1+=num1;
}
for (var k = 1; k <=3; k++) {
	var num2=parseInt(prompt("Ingrese el "+valor[k-1]+" valor de la segunda lista "))
	suma2+=num2;
}
if (suma1>suma2) {
	alert("Lista 1 mayor");
}else if (suma1===suma2) {
	alert("Listas iguales");
}else{
	alert("Lista 2 mayor");
}