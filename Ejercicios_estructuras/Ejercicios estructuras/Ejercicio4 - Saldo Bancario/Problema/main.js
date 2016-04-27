// Escribe aquí tu codigo Javascript

alert("SALDO BANCARIO");
var clientes=parseInt(prompt("Ingrese la cantidad total de clientes a evaluar"));
var suma=0;
for (var i = 1; i <=clientes; i++) {
	var num, name, saldo, state;
	num=parseInt(prompt("Ingrese el número de cuenta del cliente "+i));
	name=prompt("Ingrese el nombre del cliente "+i);
	saldo=parseInt(prompt("Ingrese el saldo del cliente "+i));
	if (saldo>0) {
		state="Acreedor";
		suma+=saldo;
	}else if (saldo===0) {
		state="Nulo";
	}else{
		state="Deudor";
	}
	alert("El número de cuenta ingresado es: "+num+", el nombre del cliente es: "+name+", el estado de la cuenta del cliente es: "+state);
}
alert("La suma de los saldos de todos los clientes acreedores es: "+suma);