// Escribe aquí tu codigo Javascript
var valores = [true, 5, false, "hola", "adios", 2];
var t1=valores[3].length;
var t2=valores[4].length;
if (t1>t2) {
	alert("El primer elemento de texto es mayor");
}else if (t1===t2) {
	alert("Ambos elementos de texto tienen igual longitud");
}else{
	alert("El segundo elemento de texto es mayor");
}
alert(valores[0]);
alert(valores[2]);
alert("La suma de los elementos numéricos es: "+(valores[1]+valores[5]));
alert("La resta de los elementos numéricos es: "+(valores[1]-valores[5]));
alert("La multiplicación de los elementos numéricos es: "+(valores[1]*valores[5]));
alert("La división de los elementos numéricos es: "+(valores[1]/valores[5]));