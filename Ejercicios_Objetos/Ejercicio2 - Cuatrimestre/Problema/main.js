// Escribe aquí tu codigo Javascript

function cuatrimestre(){
	var meses=["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
	var mes=prompt("Ingresa el mes actual en letras").toLowerCase();
	for (var i = 0; i <12; i++) {
		if (mes===meses[i]) {
			if (i<=3) {
				alert("Se encuentra en el primer CUATRIMESTRE del año");
			}else if (i<=7) {
				alert("Se encuentra en el segundo CUATRIMESTRE del año");
			}else{
				alert("Se encuentra en el tercer CUATRIMESTRE del año");
			}
		}
	}
}
cuatrimestre();
