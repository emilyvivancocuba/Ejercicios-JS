// Escribe aquí tu codigo Javascript

function llamada(){
	var numeros=[
		["989857891", "María Pilar JEFA"],
		["979198325","David papá"],
		["958819034", "Raul Escriba <3"],
		["919865067", "Tamara La loca"],
		["987043341", "Adriana primix"],
		["953570151", "Alex Alvarez"],
		["980765434", "Papu laboratoria"],
		["955551234", "Javier FIQT"],
		["932121323", "Lucre"]
	]
	var num=prompt("Ingrese el número que la está llamando");
	var nueve=num.split("");
	console.log(nueve);
	if (num.length===9) {
		if (nueve[0]==="9") {
			var sum=0;
			for (var i = 0; i < numeros.length; i++) {
				if (num===numeros[i][0]) {
					alert("Es: "+numeros[i][1]+" !");
					sum=1;
				}
			}
			if (sum===0) {
				alert("Número desconocido c:")
			}
		}else{
			alert("No ha ingresado un número de celular que empiece con 9");
		}
	}else{
		alert("No ha ingresado un número de 9 dígitos");
	}
}
llamada();
