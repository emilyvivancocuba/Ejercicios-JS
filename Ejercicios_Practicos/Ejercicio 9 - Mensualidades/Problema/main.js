//Escribe aquí tú código
var suma=0;
for (var i=0; i<20; i++) {
	var pago_mensual=5*i*i+5*i+10;
	var pago_mes=pago_mensual.toString();
	suma+=pago_mensual;
	var j=i+1;
	alert("El mes "+j+" pagó: "+pago_mes);
}
var suma_total=suma.toString();
alert("Lo que pagó al final del vigésimo mes es: "+suma_total);