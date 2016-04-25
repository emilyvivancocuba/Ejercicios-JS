//Escribe aquí tú código
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var ahorro=null;
for (var i=1; i<=12; i++) {
	var num=parseInt(prompt("Ingresa el sueldo del mes de " + meses[i-1]));
	if (num>0) {
		ahorro+=num;
		alert("El ahorro hasta el presente mes es de "+ahorro);
	}else{
		alert("No ha ingresado un número");
		i=12;
	}
}