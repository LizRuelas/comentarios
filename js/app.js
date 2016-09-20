window.addEventListener("load", function() {
	var boton=document.getElementById("button");
	var textArea= document.getElementById("textArea");
	var contador = document.getElementById("cont");
	contador.innerHTML=140;
	
	boton.addEventListener("click",function(e){
		e.preventDefault();
   		mostrarMensaje(textArea.value);
    	textArea.value="";
    	boton.disabled=true;
    	contador.innerHTML=140;

	});

	textArea.addEventListener("keyup",function(){
		boton.disabled=false;
		var limite = 140;
		var longitud = document.getElementById("textArea").value.length;
		contador.innerText= limite-longitud;
		if (limite <= longitud){
			boton.disabled=true;
		} else if (longitud==0){
			boton.disabled=true;
		}
		if (longitud>=120  ){
			contador.classList.add("colorBlue");
		} else {
			contador.classList.remove("colorBlue");
		}
		if (longitud>=130) {
			contador.classList.remove("colorBlue");
			contador.classList.add("colorRed");
		} else {
			contador.classList.remove("colorRed");
		}
	});
	function mostrarMensaje(textArea){
		var nuevoP = document.createElement("p");
    	var textNode = document.createTextNode(textArea);
    	nuevoP.appendChild(textNode);
    	var contenedor = document.getElementById("contenedor");
    	contenedor.insertBefore(nuevoP, contenedor.childNodes[0]);
	}
});