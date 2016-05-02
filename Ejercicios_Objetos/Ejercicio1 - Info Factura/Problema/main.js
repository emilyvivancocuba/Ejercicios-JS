function factura(){
	var factura = {
		"empresa": ["Nombre", "Direccion", "Telefono", "NIF"],
		"cliente": ["Nombre", "Direccion", "Telefono", "NIF"],
		"elementos":["Descripcion", "Precio", "Cantidad"],
		"info_basica":["Importe_total", "Tipo_iva", "Forma_de_pago"]
	};
	var emp=[];
	var cli=[];
	var ele=[];
	var info=[];
	document.write("<br>=====================================");
	for (var i = 0; i < (factura.empresa).length; i++) {
		emp.push(prompt("Ingrese "+factura.empresa[i]+" de la EMPRESA"));
		document.write("<br>"+factura.empresa[i]+" de la EMPRESA : "+emp[i]);
	}
	document.write("<br>=====================================");
	for (var j = 0; j < factura.cliente.length; j++) {
		cli.push(prompt("Ingrese "+factura.cliente[j]+" del CLIENTE"));
		document.write("<br>"+factura.cliente[j]+" del CLIENTE : "+cli[j]);
	}
	document.write("<br>=====================================");
	for (var k = 0; k < factura.elementos.length; k++) {
		ele.push(prompt("Ingrese "+factura.elementos[k]+" del PRODUCTO"));
		document.write("<br>"+factura.elementos[k]+" del PRODUCTO : "+ele[k]);
	}
	document.write("<br>=====================================");
	for (var l = 0; l < factura.info_basica.length; l++) {
		info.push(prompt("Ingrese "+factura.info_basica[l]));
		document.write("<br>"+factura.info_basica[l]+" : "+info[l]);
	}
	document.write("<br>=====================================");
	var total=(ele[1])*(ele[2])*(info[1]);
	document.write("<br>El Importe total del contribuyente es de: "+total);
}
factura();