// Escribe aquí tu codigo Javascript

function imc(){
	alert("CÁLCULO DEL ÍNDICE DE MASA CORPORAL");
	var masa=parseFloat(prompt("Ingrese su masa corporal en kilogramos"));
	var altura=(parseFloat(prompt("Ingrese su altura en metros"))).toFixed(2);
	var imc=((masa)/(altura*altura)).toFixed(2);
	alert("Su índice de masa corporal es: "+imc);
}
imc();
