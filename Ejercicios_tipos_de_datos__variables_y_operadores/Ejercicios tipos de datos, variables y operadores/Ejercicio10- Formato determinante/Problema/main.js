// Escribe aquí tu codigo Javascript

alert("CALCULAR DETERMINANTE DE SEGUNDO ORDEN");
var frase="Teniendo en cuenta que una matriz de orden 2 se escribe de la siguiente forma:\nA=\n[a   b]\n[c   d]."
var a=parseInt(prompt(frase + "  Ingrese a"));
var b=parseInt(prompt(frase + "  Ingrese b"));
var c=parseInt(prompt(frase + "  Ingrese c"));
var d=parseInt(prompt(frase + "  Ingrese d"));
var det=a*d-b*c;
alert("El determinante de la matriz: \nA=\n["+a+"   "+b+"]\n["+c+"   "+d+"]\nEs: "+det);

