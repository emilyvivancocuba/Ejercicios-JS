// Escribe aquí tu codigo Javascript

function inversion(){
	var valor=parseInt(prompt("Ingresa el valor actual de la inversión en soles"));
	var tasa=parseInt(prompt("Ingrese la tasa"));
	var periodo=parseInt(prompt("Ingrese el periodo en meses"));
	var valor_futuro =valor*Math.pow (1+tasa/100,periodo);
	alert("El valor futuro de la inversión es de "+valor_futuro+" nuevos soles");
}
inversion();
