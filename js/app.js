window.addEventListener("load", function() {
	var boton=document.getElementById("button");
	var textArea= document.getElementById("textArea");
	
	boton.disabled=true;
		

	boton.addEventListener("click",function(e){
		e.preventDefault();
		
   		mostrarMensaje(textArea.value);
    	textArea.value="";

    	boton.disabled=true;
	});

	function mostrarMensaje(textArea){
		var nuevoP = document.createElement("p");
    	var textNode = document.createTextNode(textArea);
    	nuevoP.appendChild(textNode);
    	var contenedor = document.getElementById("contenedor");
    	contenedor.insertBefore(nuevoP, contenedor.childNodes[0]);
	}

	textArea.addEventListener("keydown",function(){
		boton.disabled=false;
		var limite = 140;
		var longitud = document.getElementById("textArea").value.length;
		var contador = document.getElementById("cont");
		contador.innerText= limite-longitud;
		if (longitud>=limite ){
			contador.classList.add("colorRed");
			boton.disabled=true;

		} else {
			contador.classList.remove("colorRed");
		}
	});
	



});