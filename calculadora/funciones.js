let p1 = document.getElementById('opera');
let p2 = document.getElementById('res');
let calculadora = document.getElementById('principal');
let calculadora2 = document.getElementById('numeral');

function agregar(num){
	p1.innerHTML+=num;
	calcular();
}

function calcular(){
	p2.innerHTML= eval(p1.innerHTML);
}

function borrar(){
	p1.innerHTML="";
	p2.innerHTML="";
}

function resultado(){
	p1.innerHTML = p2.innerHTML;
	p2.innerHTML= "";
}

function claro(){
	calculadora.classList.remove('oscuro');
	calculadora.classList.add('claro');
	calculadora2.classList.remove('oscuro');
	calculadora2.classList.add('claro2');

	let boton = document.querySelectorAll('.boton');
	let t = boton.length;

	for(i=t-1; i>=0; i--){
		boton[i].classList.remove('toscuro');
		boton[i].classList.add('tclaro');
	}

	p1.classList.remove('toscuro');
	p1.classList.add('tclaro');
	document.querySelector('#icon1').classList.add('activo');
	document.querySelector('#icon2').classList.remove('activo');
	document.querySelector('body').classList.remove('claro');
	document.querySelector('body').classList.add('oscuro');
}

function oscuro(){
	calculadora.classList.remove('claro');
	calculadora.classList.add('oscuro');
	calculadora2.classList.remove('claro2');
	calculadora2.classList.add('oscuro');

	let boton = document.querySelectorAll('.boton');
	let t = boton.length;

	for(i=t-1; i>=0; i--){
		boton[i].classList.remove('tclaro');
		boton[i].classList.add('toscuro');
	}

	p1.classList.remove('tclaro');
	p1.classList.add('toscuro');
	document.querySelector('#icon1').classList.remove('activo');
	document.querySelector('#icon2').classList.add('activo');
	document.querySelector('body').classList.add('claro');
	document.querySelector('body').classList.remove('oscuro');
}