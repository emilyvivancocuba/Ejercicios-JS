var horas_totales=0;
var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
var pago_por_hora=parseInt(prompt("Ingrese el pago que asigna a sus trabajadores por hora: "));
if (pago_por_hora>0) {
	for (var i=1; i<=6; i++) {
		var horas=parseInt(prompt("Señor hacendado, ingrese las horas trabajadas de su trabajador el dia "+dias[i-1]));
		if (horas>0) {
			horas_totales+=horas;
			total_horas=horas_totales.toString();
			sueldo=horas_totales*pago_por_hora;
			total_sueldo=sueldo.toString();
		}else{
			alert("No ha ingresado un número válido");
		}
	}
	alert("Las horas totales trabajadas por este empleado son de: " + total_horas + " y por ellas Usted, Señor hacendado, tendrá que pagar un total de " + total_sueldo + " Nuevos Soles");
}else{
	alert("Usted es un explotador sin alma");
}