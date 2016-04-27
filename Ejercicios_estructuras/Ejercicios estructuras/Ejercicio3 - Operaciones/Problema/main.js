// Escribe aquí tu codigo Javascript

alert("OPERACIONES MATEMATICAS");
var a=parseInt(prompt("Ingrese el primer número"));
var b=parseInt(prompt("Ingrese el segundo número"));
if (a>b) {
	var suma=a+b;
	var resta=a-b;
	alert("La suma de "+a+" y "+b+" es "+suma+" y la resta es "+resta);
}else if (a===b) {
	alert("Ambos números son iguales");
}else{
	var mul=a*b;
	var div=a/b;
	alert("La multiplicación de "+a+" y "+b+" es "+mul+" y la división es "+div);
}