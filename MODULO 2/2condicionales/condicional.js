// // Condicionales

// // let edad = prompt('Dime tu edad');

// // if (edad < 12) {
// //     console.log("eres un niño");
// //     if (edad < 2) {
// //         console.log("eres un bebé"); 
// //     }
// // } else if (edad >= 12 && edad < 18) {
// //     console.log("eres un adolescente");
// // }else if (edad >=18  && edad < 60) {
// //     console.log("eres un adulto");
// // }else {
// //     console.log("eres un anciano");
// // }

// // // Truthy: Strings no vacios, [], {}, Numeros diferentes de cero 
// // // Falsy: 0, String vacio, undefined, null, Nan

// // // Actua como un valor verdadero
// // if (edad) {
// //     console.log('Ingresaste una valor truthy');
// // } else {
// //     console.log('Ingresaste una valor falsy');

// // }

// // Switch

// let color = prompt (`Escoge un color (escribe su número para saber tu personalidad):
// 1. Rojo
// 2. Verde
// 3. Azul
// 4. Amarillo
// 5. Negro
// `);

// switch (color) {
//     case '1':
//         console.log('Rojo. Eres un romántico');
//         break;
//     case '2':
//         console.log('Verde. Estás en contacto con la naturaleza');
//         break
//     case '3':
//         console.log('Azul');
//         break
//     case '4':
//         console.log('Amarillo');
//         break

//     case '5':
//         console.log('Negro');
//         break

//     default:
//     console.log('Escoge un valor valido');
//         break;
// }


// Operador ternario
//Es una forma abreviada de escribir un if
// condicion ? valorTrue : valorFalse
//Necesitas tener un valor false. Sino tienes que escribir un if

let nombre = prompt('Escribe tu nombre');
nombre.length > 5 ? console.log('nombre largo') : console.log('nombre corto');
