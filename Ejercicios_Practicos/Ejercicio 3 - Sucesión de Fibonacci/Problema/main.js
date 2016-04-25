//Escribe aquí tú código
var a=0;
var b=1;
var sucesion="0, 1, ";
function fibonacci(num){
	for (var i=2; i<num; i++) {
		suma=a+b;
		sucesion+=(suma.toString())+", ";
		a=b;
		b=suma;
	}
	return sucesion;
}
var num=parseInt(prompt("Ingrese la cantidad de términos que deseas ver en la serie de Fibonacci: "));
alert("Esta es la serie de Fibonacci: " + fibonacci(num));