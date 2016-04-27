// Escribe aquí tu codigo Javascript
alert("SUMA DE NÚMEROS");
var suma=0;
var num_10=prompt("Ingresa 10 números separados por espacio");
var numeros_cadena=num_10.split(" ");
for (var i=0; i<10; i++) {
	suma+=parseInt(numeros_cadena[i]);
}
alert("La suma de todos los números ingresados es: "+suma);