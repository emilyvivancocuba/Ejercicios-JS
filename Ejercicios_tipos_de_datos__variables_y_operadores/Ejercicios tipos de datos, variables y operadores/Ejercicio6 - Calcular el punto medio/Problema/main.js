// Escribe aquí tu codigo Javascript
alert("CALCULAR EL PUNTO MEDIO");
var frase="Sea x1, y1 las coordenadas de un punto. Y x2, y2 las coordenadas de un segundo punto. ";
var x1=parseInt(prompt(frase+"Ingresa x1: "));
var y1=parseInt(prompt(frase+"Ingresa y1: "));
var x2=parseInt(prompt(frase+"Ingresa x2: "));
var y2=parseInt(prompt(frase+"Ingresa y2: "));
var x1_y1=[x1, y1];
var x2_y2=[x2, y2];
var pto_medio=[[(x1+x2)/2], [(y1+y2)/2]];
alert("El punto medio del segmento de extremos, los puntos: ["+x1_y1+"] y ["+x2_y2+"] es ["+pto_medio+"]");