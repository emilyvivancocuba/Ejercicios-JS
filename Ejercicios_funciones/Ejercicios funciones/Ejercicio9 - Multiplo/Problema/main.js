// Escribe aquí tu codigo Javascript
alert("MULTIPLOS DE UN NUMERO");
function multi(num){
	
	var total="";
	for (var i = 0; i <10; i++) {
		var multiplo=num*i;
		total+=multiplo.toString()+", ";
	}
	alert("Los 10 primeros múltiplos del número "+num+" son: "+ total);
}
var num=parseInt(prompt("Ingrese un número"));
multi(num);
