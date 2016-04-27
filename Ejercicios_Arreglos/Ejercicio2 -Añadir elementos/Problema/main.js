// Escribe aquí tu codigo Javascript
var cadena,n;
n=prompt("Ingrese la cantidad de palabras que desea que contenga la cadena");
cadena=[prompt("Ingrese la primera palabra")];
alert(cadena);
for (var i=0; i<=(n-2); i++) {
	cadena.push(prompt("Ingrese la palabra "+(i+2)));
	alert(cadena);
}
alert("Tu cadena queda así: "+cadena);