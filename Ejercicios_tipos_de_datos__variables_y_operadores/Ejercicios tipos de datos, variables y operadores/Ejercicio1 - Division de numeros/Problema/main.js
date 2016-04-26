// Escribe aquí tu codigo Javascript
alert("DIVISION DE NUMEROS");
var num1=parseInt(prompt("Ingrese el numerador"));
var num2=parseInt(prompt("Ingrese el denominador"));
if (num1==undefined && num2==undefined){
	alert("No ha ingresado números");
}else{
	var result=num1/num2;
	alert("El resultado de la división es: "+result);
}
