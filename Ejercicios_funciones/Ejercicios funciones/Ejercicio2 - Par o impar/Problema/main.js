// Escribe aquí tu codigo Javascript
alert("NUMERO PAR O IMPAR")
function par_impar(num){
	if (num%2===0) {
		alert("El número es par");
	}else{
		alert("El número es impar");
	}
}
var num=parseInt(prompt("Ingrese el número a evaluar"));
par_impar(num);
