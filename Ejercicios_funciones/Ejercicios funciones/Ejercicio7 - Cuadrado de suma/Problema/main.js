// Escribe aquí tu codigo Javascript

alert("CUADRADO DE LA SUMA DE DOS NUMEROS");
function cuadrado(a, b){
	var sol=Math.pow(a+b, 2);
	alert("El cuadrado de la suma es: "+sol);
}
var a=parseInt(prompt("Ingrese el primer número"));
var b=parseInt(prompt("Ingrese el segundo número"));
cuadrado(a, b);