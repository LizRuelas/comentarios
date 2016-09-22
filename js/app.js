window.addEventListener("load", function() {
	var boton=document.getElementById("button");
	var textArea= document.getElementById("textArea");
	var contador = document.getElementById("cont");
	contador.innerHTML=140;
	
<<<<<<< HEAD
=======
	
>>>>>>> master
	boton.addEventListener("click",function(e){
		e.preventDefault();
   		mostrarMensaje(textArea.value);
    	textArea.value="";
    	boton.disabled=true;
    	contador.innerHTML=140;
<<<<<<< HEAD

=======
    	
    	
>>>>>>> master
	});

	textArea.addEventListener("keyup",function(){
		boton.disabled=false;
<<<<<<< HEAD
		var limite = 140;
		var longitud = document.getElementById("textArea").value.length;
		contador.innerText= limite-longitud;
		if (limite <= longitud){
			boton.disabled=true;
		} else if (longitud==0){
			boton.disabled=true;
		}
=======
		cambioColor();
		autosize();
		bloquearBoton();

	});

	function autosize(){
	    textArea.style.cssText = 'padding:0';
	    textArea.style.cssText = 'height:' + textArea.scrollHeight + 'px';
	}

	function cambioColor(){
		var limite = 140;
		var longitud = textArea.value.length;
		contador.innerText= limite-longitud;
>>>>>>> master
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
<<<<<<< HEAD
	});
=======
	}

	function bloquearBoton(){
		var limite = 140;
		var longitud = textArea.value.length;
		var textAreaVacio = textArea.value.replace(/\s/g,"");
		if (limite <= longitud || longitud==0 || textAreaVacio == 0){
			boton.disabled=true;
		} 
	}
	

>>>>>>> master
	function mostrarMensaje(textArea){
		var nuevoP = document.createElement("p");
    	var textNode = document.createTextNode(textArea);
    	nuevoP.appendChild(textNode);
    	var contenedor = document.getElementById("contenedor");
    	contenedor.insertBefore(nuevoP, contenedor.childNodes[0]);
    	reloj(nuevoP);
	}
<<<<<<< HEAD
=======

	function reloj(re){
		var momentoActual = new Date() ;
	   	var hora = momentoActual.getHours() ;
	   	var minuto = momentoActual.getMinutes() ;
	   		if (minuto<10) {
	   			minuto ="0" + minuto;
	   		}
	   	var horaImprimible = " "+ hora + " : " + minuto  ;
	   	var hora = document.createElement("span");
	   	hora.innerText=horaImprimible ;
		re.insertBefore(hora,re.childNodes[1]);
		hora.classList.add("izquierda");
	}
	
>>>>>>> master
});