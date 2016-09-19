window.addEventListener("load", function() {
	var boton=document.getElementById("button");
	var textArea="";
	boton.addEventListener("click",function(e){
		e.preventDefault();
		textArea= document.getElementById("textArea").value;
   		var nuevoP = document.createElement("p");
    	var textNode = document.createTextNode(textArea);
    	nuevoP.appendChild(textNode);
    	var contenedor = document.getElementById("contenedor");
    	contenedor.insertBefore(nuevoP, contenedor.childNodes[0]);
	});

});