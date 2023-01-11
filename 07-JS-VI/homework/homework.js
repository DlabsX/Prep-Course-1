// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
 return nombre[0].toUpperCase() + nombre.slice(1);

}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:

   cb()
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
   return cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:

  //-----------------------1re caso -----------------------//

// var numeros = [5, 4, 3, 2, 1,]   var suma = 15 ----> cb(suma)

        // var suma = 0;

        // for(var i = 0; i < numeros.length; i++) {
        //   suma = suma + numeros[i];
        // }

        // cb(suma);

//----------------------------2do caso reduce----------------------------------------

//reduce(function(acumulador, valorActual){})

   var suma = numeros.reduce(function(acumulador, valorActual){
    return acumulador + valorActual; 
   })
 cb(suma);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:


}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:

  //var newArray = [newEle,newEle, newEle];    var array = [ e, e, e] pasar cb(e)// cb(e)//cb(e)// cb(e)   devolver  newEle newEle newEle
//                                                                  i

  //------------------------------------------------------*----------//


  var newArray  = array.map(function(e){
      return cb(e)
  })  

  return newArray; 



//-------------------------------------------*----------------//


//      var newArray = []; 

//   for( var i = 0; i < array.length; i++){

//     newArray.push(cb(array[i]))
//   }

// return newArray; 
  


    
  }

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:

// var array = ["ama", "ave", "argentina", "este", "mas"]; -------    var  newArray = ["ama", "ave", "argentina"]

//  var newArray = array.filter(function(e){
//                return  e[0] === 'a'
//  })
                                                   //"a  m   a"
// return newArray; 

//-------------------------------------------****--------------------------------//

   var newArray = []; 

   for( var i = 0;  i < array.length; i++){

         if( array[i][0] === 'a'){

                newArray.push(array[i])

         }

   }

   return newArray; 
                           

  }
                                                              
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
