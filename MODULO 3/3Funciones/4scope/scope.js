/*
Scope es el ambito o contexto donde
se ejecuta una función y existen sus variables
*/

// function sumar(a) {
//     return function(b) {
//         return a + b;
//     }
// }

// let miSuma = sumar(5)(4);
// console.log(miSuma);


/* CLOSURES */

// function saludar() {
//     let saludo = 'Hola';
//     return function saludarInterno(amigo) {
//         console.log(`${saludo} ${amigo}`);
//     }
// }

// // con closures podemos acceder desde fuera de la funcion
// let miSaludo = saludar();
// miSaludo('Luisen');
// miSaludo('Ziortza');

function afuera() {
    let numero = 1;
    return function() {
        numero++;
        console.log(numero);
    }
}

let aumentar = afuera();
aumentar();
aumentar();
aumentar();
aumentar();
aumentar();
aumentar();