// Escribe aquí tu codigo Javascript

alert("MULTIPLOS DE 11");
var multiplo, suma, multiplo_string;
multiplo=0;
suma=0;
i=0;
var mostrar="";
while(multiplo<3000-11){
	multiplo=i*11;
	multiplo_string=multiplo.toString();
	suma+=multiplo;
	i+=1;
	mostrar+=multiplo_string+", ";
}
alert("Los múltiplos de 11 son: "+mostrar+" y la suma de todos ellos es: "+suma);