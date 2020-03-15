const calculadoraHtml= document.querySelector('.calculator');
const teclas = calculadoraHtml.querySelector('.calculator__keys');
const pantalla = document.querySelector('.calculator__display');
const calcular = new Calculadora();

//Booleano para ver si es el primer número que introduce a la calculadora
var primerNumero = true;
var regExpOperadores = new RegExp("^[+|*|/|-]$");

teclas.addEventListener('click', e => {
 const tecla = e.target;
 const accion = tecla.dataset.action; 
 const contenidoTecla = tecla.textContent;
 const contenidoPantalla = pantalla.textContent;

 //Separamos los números en un array eliminando los espacios y con filter(Boolean) eliminamos los valores del array vacíos 
 var arrayNumeros = contenidoPantalla.split(' ').filter(Boolean);
 //Variable en la que guardamos el ultimo número introducido u operador
 var ultimoElemento = arrayNumeros[arrayNumeros.length-1];

 /* evento producido al pulsar una tecla */
 if (tecla.matches('button')) {
   if ( (accion === 'suma' ||
  		accion === 'resta' ||
  		accion === 'multiplicar' ||
  		accion === 'dividir' ) && !primerNumero
	) {
		  console.log('operación');
		  console.log("Ultimo elemento == - : " + (ultimoElemento == "-"));
		  console.log("arrayNumeros[arrayNumeros.length-1] != "-" : " + (arrayNumeros[arrayNumeros.length-1] != "-"));
		  if ( !regExpOperadores.test(ultimoElemento) )
		  {
			pantalla.textContent += ` ${contenidoTecla} `;
		  }
		  //Dejaremos que introduzca dos símbolos '-' para que indique un número negativo. Si los últimos dos elementos son un '-' no entrará en la condición
		  else if ( ultimoElemento == "-" && arrayNumeros[arrayNumeros.length-2] != "-" && accion === 'resta')
		  {
			//No añadiremos un espacio después del segundo '-' para indicar que el número que sigue al símbolo es negativo
			pantalla.textContent += ` ${contenidoTecla}`;
		  }
		  else
		  {
			//Guardamos la posición del operador que vamos a intercambiar por el nuevo introducido
			var posicionOperador = pantalla.textContent.lastIndexOf(ultimoElemento);

			//Sustituimos el operador antiguo por el nuevo
			pantalla.textContent = pantalla.textContent.substring(0,posicionOperador) + `${contenidoTecla}` + pantalla.textContent.substring(posicionOperador+1);

		  }
	}
	 
	if(accion === 'decimal'){
		 console.log('decimal');

		 // Si el último número contiene un punto no le dejamos introducir un nuevo punto
		if (ultimoElemento.indexOf(".") == -1)
		{
		 pantalla.textContent += contenidoTecla;
		}
	}
	 
	if(accion === 'limpiar'){
		 console.log('limpiar');
		 pantalla.textContent = 0;
		 primerNumero = true;
	}
	 
	if(accion === 'calcular'){
		 console.log('calcular');
		 pantalla.textContent = calcular.evaluar(pantalla.textContent);
	}
	     
	
    if (!accion) {  
	  console.log('número');
	 if (contenidoPantalla === '0' || contenidoPantalla === "NaN") {
		 pantalla.textContent = contenidoTecla;
	 }
	 else {
		  pantalla.textContent += contenidoTecla;
	 } 
	 primerNumero = false;
	} // fin if (!accion)
	 
  } // fin if (tecla.matches('button')) 

});



