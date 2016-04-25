//Escribe aquí tú código
var ventas=parseInt(prompt("Ingresa la cantidad de ventas realizadas en el día"));
var monto_global=0;
var mayor_1000=0;
var mayor_500=0;
var menor_500=0;
var monto_global=0;
var monto_total_1000=0;
var monto_total_500=0;
var monto_total_menor_500=0;
if (ventas>0) {
	for (var i=1; i<=ventas; i++) {
		var num=parseInt(prompt("Ingrese el monto al que ascendió su venta número "+i));
		if (num>1000) {
			mayor_1000+=1;
			monto_total_1000+=num;
			
		}else if (num>500) {
			mayor_500+=1;
			monto_total_500+=num;
			
		}else{
			menor_500+=1;
			monto_total_menor_500+=num;
			
		}
	}
	var total_monto_1000=monto_total_1000.toString();
	var total_monto_500=monto_total_500.toString();
	var total_monto_menor_500=monto_total_menor_500.toString();
	monto_global=monto_total_1000+monto_total_500+monto_total_menor_500;
	var global_monto=monto_global.toString();
	alert("El monto acumulado por ventas mayores a 1000 soles es "+total_monto_1000+ ", el monto acumulado por ventas entre 500 soles y 1000 soles es de "+total_monto_500+", y el monto acumulado por ventas menores a los 500 soles es de "+total_monto_menor_500);
	alert("EL MONTO GLOBAL RECAUDADO ES DE "+monto_global);
}else{
	alert("No ha ingresado un número válido");
}