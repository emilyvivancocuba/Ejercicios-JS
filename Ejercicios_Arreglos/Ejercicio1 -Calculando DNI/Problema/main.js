// Escribe aquí tu codigo Javascript
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var dni=prompt("Ingrese el número de su DNI");
var letra_dni=prompt("Ingrese la letra de su DNI").toUpperCase();
if (dni.length===8) {
	var letra_dni_calc=letras[dni%23];
	if (letra_dni_calc===letra_dni) {
		alert("El número de DNI y la letra de DNI son correctos")
	}else{
		alert("La letra que ha ingresado no es correcta, porfavor, inténtelo de nuevo y esta vez ingrese los datos CORRECTAMENTE");
	}
}else{
	alert("El número proporcionado no es válido");
}
