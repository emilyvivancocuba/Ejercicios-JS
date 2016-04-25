//Escribe aquí tú código
var suma=0;
var cantidad_personas = parseInt(prompt("Ingrese la cantidad de personas cuyas estaturas se promediarán: "));
if (cantidad_personas>0) {
	for (var i = 1; i <= cantidad_personas; i++) {
		var estatura=parseInt(prompt("Ingrese la estatura"));
		suma+=estatura;
	}
	promedio=suma/cantidad_personas;
	alert("La estatura promedio de las " +cantidad_personas+ "personas es: " +promedio+ " .");
}else{
	alert("No es un número positivo");
}