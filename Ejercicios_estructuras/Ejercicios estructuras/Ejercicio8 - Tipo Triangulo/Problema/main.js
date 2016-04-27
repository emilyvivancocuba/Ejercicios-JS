// Escribe aquí tu codigo Javascript

alert("IDENTIFICANDO TIPO DE TRIANGULO");
var a=parseInt(prompt("Ingrese el primer lado del triángulo"));
var b=parseInt(prompt("Ingrese el segundo lado del triángulo"));
var c=parseInt(prompt("Ingrese el tercer lado del triángulo"));
if (a>0&&b>0&&c>0) {
	if ((a<(b+c))&&(b<(a+c))&&(c<(a+b))) {
		if (a===b && b===c) {
			alert("Es un triángulo equilátero");
		}else if (a===b || b===c || a===c) {
			alert("Es un triángulo isósceles");
		}else if (a*a===b*b+c*c || b*b===a*a+c*c || c*c===a*a+b*b){
			alert("Es un triángulo rectángulo");
		}else{
			alert("Es un triángulo escaleno");
		}
	}else{
		alert("Los números que usted ha ingresado no forman un triángulo, puesto que no cumple con la condición de existencia");
	}
}else{
	alert("Usted no ha ingresado números válidos");
}