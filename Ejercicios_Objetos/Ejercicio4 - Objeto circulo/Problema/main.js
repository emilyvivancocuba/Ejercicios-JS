// Escribe aquí tu codigo Javascript
var radio=parseInt(prompt("Ingrese el radio del circulo en unidades"));
var area, longitud;
function area(){
	area=3.14159*radio*radio;
}
function longitud(){
	longitud=2*3.14159*radio;
}
area();
longitud();
document.write("<br>El área del circulo es "+area+" unidades cuadradas");
document.write("<br>La longitud del circulo es "+longitud+" unidades cuadradas");