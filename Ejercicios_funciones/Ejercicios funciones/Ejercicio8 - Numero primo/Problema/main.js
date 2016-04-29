// Escribe aquí tu codigo Javascript

alert("NUMERO PRIMO");
function primo(num){
	var cont=0;
	for (var i = 1; i <=num; i++) {
		if (num%i===0) {
			cont+=1;
		}
	}
	if (cont===2) {
		alert("El número ES PRIMO");
	}else{
		alert("El número NO ES PRIMO");
	}
}
var num=parseInt(prompt("Ingresa un número para validar si es PRIMO o no"));
primo(num);