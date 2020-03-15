"use strict";

const Calculadora = function() {
  this.evaluar = cadena => {
    
    var tieneOperador = true;
    var posicionMultiplicacion = 0;
    var posicionDivision = 0;

    //Separamos los números en un array eliminando los espacios y con filter(Boolean) eliminamos los valores del array vacíos 
    var arrayNumeros = cadena.split(' ').filter(Boolean);
    
    //Primero realizamos las multiplicaciones y divisiones de izquierda a derecha
    posicionDivision = arrayNumeros.indexOf("/");
    posicionMultiplicacion = arrayNumeros.indexOf("*");

    while (posicionDivision != -1 || posicionMultiplicacion != -1)
    {
      ((posicionDivision < posicionMultiplicacion && posicionDivision != -1)||(posicionDivision != -1 && posicionMultiplicacion == -1)) ?
      arrayNumeros = realizarOperacion (arrayNumeros, "/") : arrayNumeros = realizarOperacion (arrayNumeros, "*") ;

      posicionDivision = arrayNumeros.indexOf("/");
      posicionMultiplicacion = arrayNumeros.indexOf("*");
    }

    while ( arrayNumeros.length > 1 )
    {
      arrayNumeros = realizarOperacion (arrayNumeros, arrayNumeros[1]);
    }

     return arrayNumeros[0]; 
  }
};

function realizarOperacion (array, operador)
{
  var posicionOperador = array.indexOf(operador);
  var resultadoOperacion = 0;

  while (posicionOperador != -1)
  {
    switch(operador)
    {
      case '*': resultadoOperacion = array[posicionOperador-1]*array[posicionOperador+1];
                break;
      case '/': resultadoOperacion = array[posicionOperador-1]/array[posicionOperador+1];
                break;
      case '+': resultadoOperacion = parseInt(array[posicionOperador-1])+parseInt(array[posicionOperador+1]);
                break;
      case '-': resultadoOperacion = array[posicionOperador-1]-array[posicionOperador+1];
                break;
    }
    array.splice(posicionOperador - 1, 3, resultadoOperacion);
    
    posicionOperador = array.indexOf(operador);
  }

  return array;
}
