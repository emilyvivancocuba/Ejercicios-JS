//Escribe aquí tú código
var x1=null;
var x2=null;
function zacateca(x1, x2){
	var encuentro=(x1+x2)/2;
	return encuentro;
}
x1=parseInt(prompt("Ingresa posicion del zacateca 1: "));
x2=parseInt(prompt("Ingresa posicion del zacateca 2: "));
alert("Los zacatecas se encontrarán en la posicion: "+zacateca(x1, x2));