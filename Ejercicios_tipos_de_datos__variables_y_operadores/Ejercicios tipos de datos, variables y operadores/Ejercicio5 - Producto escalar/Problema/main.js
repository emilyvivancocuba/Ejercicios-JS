// Escribe aquí tu codigo Javascript

alert("PRODUCTO ESCALAR");
var frase="Teniendo en cuenta que la suma de dos vectores ocurre de esta forma:\n [a, b]+[c, d]."
var a=parseInt(prompt(frase + "  Ingrese a"));
var b=parseInt(prompt(frase + "  Ingrese b"));
var c=parseInt(prompt(frase + "  Ingrese c"));
var d=parseInt(prompt(frase + "  Ingrese d"));
var ayb=[a, b];
var cyd=[c, d];
var prod=a*c+b*d;
alert("El producto escalar de los vectores: \n["+ayb+"] y ["+cyd+"] es "+prod);