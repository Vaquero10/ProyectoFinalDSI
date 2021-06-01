let productos = [[0, "Pepsi", 10], [1, "Sabritas", 13], [2, "Milky Way", 13], [3, "Panditas", 8], [4, "Clorets", 2]];


function cargar(){
	for(i=0; i<productos.length; i++){
		document.querySelector('section').innerHTML += "<div id='"+productos[i][0]+"'>"+
														"<h1>"+productos[i][1]+"</h1>"+
														"<p>"+productos[i][2]+"</p>"+
														"<button onclick='agregar("+productos[i][0]+")'>+</button>"+
														"</div>";
	}
}

window.addEventListener("load", cargar);


let carrito = [];
function agregar(id){
	carrito.push(id);
	document.querySelector('s').innerHTML=carrito.length;
}

function mostrar(){
	document.querySelector('nav').innerHTML = "<h1> "+"TUS PRODUCTOS:"+ "</h1>"+
											  "<button onclick='volver()'><-</button>";
	let lista = "";
	for(i=0; i<carrito.length; i++){
		for(j = 0; j<productos.length; j++){
			if (productos[j][0] == carrito[i]) {
				document.querySelector('nav').innerHTML += 
														   "<h3> "+productos[j][1]+ "</h3>"+
														   "<h3>"+"$ " +productos[j][2]+ "</h3>";

				document.querySelector('section').innerHTML = "";
	}
			}

		}
	}


function visibilidad(){
	mostrar();
}

function volver(){
	for(i=0; i<productos.length; i++){
		document.querySelector('section').innerHTML += "<div id='"+productos[i][0]+"'>"+
														"<h1>"+productos[i][1]+"</h1>"+
														"<p>"+productos[i][2]+"</p>"+
														"<button onclick='agregar("+productos[i][0]+")'>+</button>"+
														"</div>";

		document.querySelector('nav').innerHTML = ""; 
		var index = 0;
		carrito.splice(index, carrito.length);
		document.querySelector('s').innerHTML= "";
	}


}
