// Escribe aquí tu codigo Javascript

alert("CENSO PROVISIONAL");
var dni,dni_string,j,k,m;
m=0;j=0;k=0;
for (var i=0; i<=9999; i++) {
	i_1=i+1;
	dni_string=prompt("Ingrese el número del dni de la persona "+i_1);
	dni=parseInt(dni_string);
	if ((dni_string.length)===8 || dni===0) {
		if (dni===0) {
			alert("El proceso ha terminado y la cantidad total de censados es: "+i+"\nEl total de varones es: "+k+"\nEl total de mujeres es: "+j+"\nLa cantidad de varones cuya edad varía entre 16 y 65 años es: "+m);
			i=9999;
		}else{
			var edad=parseInt(prompt("Ingrese la edad de la persona en años"));
			if (edad>0 && edad<120) {
				var sexo=prompt("Ingrese el sexo de la persona: F (femenino) o M (masculino)");
				var genero=sexo.toLowerCase();
				if (genero==="f") {
					j+=1;
				}else if (genero==="m") {
					if (edad>=16&&edad<=65) {
						m+=1;
					}
					k+=1;
				}else{
					alert("No has ingresado un género válido");
				}
			}else{
				alert("No ha ingresado una edad válida");
			}
		}
	}else{
		alert("No ha ingresado un número de dni válido");
	}
}