/* 
Parámetros y argumentos
*/

// let sumar = (a,b) => a + b; //param
// let miSuma = sumar(2,3); //args
// // console.log(miSuma);

// /*
// - Si hay más parámetros que argumentos, 
// los argumentos que faltantes son undefined
// - Si hay más argumentos que parámetros no devuelve error
// */

// function sumar(a,b) {
//    return a + b;
// }
// // console.log(sumar(2,3,4,5,6,7)); //resultado 9


// // function sumarTodos() {
// //     // console.log([...arguments]); spread operator 
// //     return [...arguments].reduce((a,b) => a + b); 
// // }

// // console.log(sumarTodos(1,2,3,4));

// let numeros = [2,3];
// //pasar un array como parametro con spread operator
// // expande el array como si fuera un valor
// console.log(sumar(...numeros));


/* Parametros por defecto */

// function sumar(a , b = 2) {
//     return a + b;
// }
// console.log(sumar(1));

/* Parametros rest */
function sumarTodos(...elements) { // spread operator
    return elements.reduce((a,b) => a + b);
}

console.log(sumarTodos(1,2,3,10,34));


