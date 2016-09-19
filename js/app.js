window.addEventListener("load", function() {
	var boton=document.getElementById("button");
	boton.addEventListener("click",function(e){
		e.preventDefault();
		var textArea= document.getElementById("textArea");
   		mostrarMensaje(textArea.value);
    	textArea.value="";
	});

	function mostrarMensaje(textArea){
		var nuevoP = document.createElement("p");
    	var textNode = document.createTextNode(textArea);
    	nuevoP.appendChild(textNode);
    	var contenedor = document.getElementById("contenedor");
    	contenedor.insertBefore(nuevoP, contenedor.childNodes[0]);
	}

});