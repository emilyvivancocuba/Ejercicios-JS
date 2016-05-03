// Escribe aquí tu codigo Javascript

function dispensadora(){
	var tope=(parseFloat(prompt("Ingrese la capacidad de la gasolinera en Litros"))).toFixed(2);
	document.write("<br>En un inicio hay en la gasolinera "+(tope)+" litros de gasolina<br>===================");
	var sum=0.00;
	var i=1;
	while (sum<tope){
		var num=(parseFloat(prompt("Ingrese el consumo "+i+" de la gasolina"))).toFixed(2);
    	sum+=num;
    	console.log(sum);
    	console.log(sum);
    	console.log(tope);
    	if (sum>=tope) {
			alert("Se han consumido los "+tope+" litros de la gasolinera");
		}
    	document.write("<br>Queda en la gasolinera "+(tope-sum)+" litros de gasolina<br>===================");
    	i+=1;
	}
}
dispensadora();
