//Escribe aquí tú código
var n=parseInt(prompt("Escriba la cantidad de números que ingresará uno a uno para saber si son positivos, negativos o iguales a cero: "));
var num=null;
var posi=0;
var nega=0;
var cero=0;
for (var i = 0; i <n; i++) {
	falta=n-i;
	num=parseInt(prompt("Le falta ingresar "+falta+" números"));
	if (num>0) {
		posi+=1;
	}else if (num===0) {
		cero+=1;
	}else{
		nega+=1;
	}
}
alert(posi+" números son positivos, "+nega+" números son negativos y "+cero+" números son iguales a cero");