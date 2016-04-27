// Escribe aquí tu codigo Javascript
alert("TRADUCIENDO PALABRAS");
var palabra=prompt('Ingrese alguna de las siguientes palabras para traducirlas: "casa, mesa, perro, gato"');
var lower=palabra.toLowerCase();
switch(lower){
	case "casa":
		alert("HOUSE");
		break;
	case "mesa":
		alert("TABLE");
		break;
	case "perro":
		alert("DOG");
		break;
	case "gato":
		alert("CAT");
		break;
}