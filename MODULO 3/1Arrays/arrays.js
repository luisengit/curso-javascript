// El array puede contener tb objetos y booleans
// let arr = [1,2,3,4,5];

// //longitud array
// console.log(arr.length);
// console.log(arr[4]);

// let sum = 0;
// for (let index = 0; index < arr.length; index++) {
//     sum += arr[index];    
// }

// console.log(sum);

 // indexof
 // buscar elemento en el array
//  console.log(arr.indexOf(2));

 //Agregar elementos con .push y .unshift
 // .push(ele1,el2,el3)  -> Añade al final
 // .unshift(ele1,el2,el3) -> Añade al inicio

//  arr.push('javascript', 'desde', 'cero');
//  console.log(arr);

//  arr.unshift('javascript', 'desde', 'cero');
//  console.log(arr);

//Eliminar un solo elemento (sin parámetros)
// Estos métodos devuelven el elemento eliminado
// .pop() al final
// .shift() al final

// let deletedEl = arr.pop();
// console.log(arr);
// console.log(deletedEl);

// let deletedEl = arr.shift();
// console.log(arr);
// console.log(deletedEl);

// // .join('separador')
// // para devolver los elementos del array como un string
// // 'separador' es por defecto una coma
// console.log(arr.join(' '));


// splice(a,b,items)
//añade o quita elementos
//elimina un elemento desde la posicion 2
//Y agrega 2 más
// arr.splice(2,1,'hola','Que'); 
// console.log(arr);


// //slice->crea un nuevo array
// console.log(arr);
// let arr2 = arr.slice(2,5);
// console.log(arr2);

// //creas una copia del array
// let arr2 = arr.slice();
// console.log(arr2);


// ES6 
// .find(cb);
// el primer elemento > 3 lo devuelves
// let arr = [1,2,3,4,5];
// let num = arr.find( el => el > 3);
// console.log(num);

// // te devuelve el indice del primer elem > 3
// let arr = [1,2,3,4,5];
// let numIndex = arr.findIndex( el => el > 3 );
// console.log(numIndex);


// Iteradores -> SIgue recordado la posicion anterior
// Son objetos que contienen un metodo next()
// Ese método devuelve un objeto con dos propiedades
// value, done

// .keys() .values() .entries()

let arr = [1,2,3,4,5];
// con keys accedo a los indices del array
let iterador = arr.keys();
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
// ya no encuentra ninguno más
console.log(iterador.next());






