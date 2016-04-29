// Escribe aquí tu codigo Javascript

alert("OPERACIONES MATEMATICAS");
function operacion(simbolo){
	var sol, op;
	switch (simbolo){
		case "+":
		sol=a+b;
		op="sumados";
		break;
		case "-":
		sol=Math.abs(a-b);
		op="restados";
		break;
		case "*":
		sol=a*b;
		op="multiplicados";
		break;
		case "/":
		sol=a/b;
		op="divididos";
		break;
		default:
		op="No ingresó ningún operador válido";
		sol="-";
	}
	alert("Los números "+a+" y "+b+" fueron "+op+" y el resultado es "+sol);
}
var a=parseInt(prompt("Ingrese un número"));
var b=parseInt(prompt("Ingrese el segundo número"));
var simbolo=prompt('Ingrese la operación que desea realizar.\n Puede usar los siguientes: "+", "-", "*" ó "/"');
operacion(simbolo);