/* Tipos de funciones */
// Funciones por definición y por expresión
    // Función por definición
    function funcionPorDefinicion() {
        // cuerpo de la funcion
    }
    funcionPorDefinicion();

    // Función por expresión
    let funcionPorExpresion = function() {
        // cuerpo de la función
    }
    funcionPorExpresion();
    let c = console.log;
    c('hola mundo');



//  Funciones nombradas y funciones anónimas
/* callback = una función que es ejecutada por otra despues
de un proceso*/

//callback
// el.addEventListener('click',function(){
//     //hacer algo
// });

/* Funciones de flecha (arrow functions) ES6
* Son funciones anónimas
* (param1,param2,param3) => valorDeRetorno
*/

// Funcion de flecha
let suma = (a,b) => a + b; //datos entrada => datos salida
let miSuma = suma(1,2);
c(miSuma);

// let cuadrado = (a) => {
//     if (typeof a == 'number') {
//         return a * a;
//     }
// };

let cuadrado = a => (typeof a == 'number') ? a * a : undefined;

let miCuadrado = cuadrado(6);
c(miCuadrado);

//la funcion de flecha devuelve un objeto
let myObj = (a,b) => ({a,b});
let myCustomObj = myObj('hola','mundo');
c(myCustomObj);


