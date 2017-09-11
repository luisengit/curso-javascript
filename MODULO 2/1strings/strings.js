let saludo = 'Bienvenidos al concierto';

//Propiedades
    //longitud string (los espacios cuentan)
let longitud = saludo.length;
// console.log(longitud);

//Métodos
    //Métodos sin parámetros

    //Quitar espacios en blanco al inicio y al final
// console.log(saludo.trim());
//     //Quita espacios prin y fin y pone en mayusc
// console.log(saludo.trim().toUpperCase());
//     //Quita espacios prin y fin y pone en minusc
// console.log(saludo.trim().toLowerCase());

    //Métodos con parámetros

    //indexOf(srting[i])
    //buscar en el string desde la posición que se indique contando desde el inicio al fin
    //Cuando no encuentra, te devuelve menos 1
// console.log(saludo.indexOf('i',2));

//     //lastIndexOf(srting[i])
//     //buscar en el string desde la posición que se indique contando desde el fin al inicio
// console.log(saludo.lastIndexOf('i', 2));

    //replace(oldstring,newstring)
    //remplaza la parte del string que se indique
// let nuevoSaludo = saludo.replace('concierto', 'concert');
// console.log(nuevoSaludo);

    //split('separador', N)
    //convierte un string en un array
// let arrayFromSaludo = saludo.split(' ');
// console.log(arrayFromSaludo);

//substring(a,b), substr(a,b), slice(a,b)

//let substring, substr, slice;
//Omite el num de caracteres indicado
//poniendo el inicio y el fin

// substring = saludo.substring(4,7);
// console.log(substring);

// //desde el siguiente numero al que s incica
// //toma los caracteres que se indiquen
// //con numero negativo empieza a contar desde atras
// substr = saludo.substr(4,5);
// console.log(substr);

// //elimina el numero indicado
// //con numero negativo empieza a contar desde atras
// slice = saludo.slice(4,7);
// console.log(slice);

//Nuevos métodos con ES6
//startsWith(), endsWith(), includes()

//busca desde el principio del string 
//lo que buscamos
//indicando si es true o false
console.log(saludo.startsWith('c'));

//busca desde el final del string 
//lo que buscamos
//indicando si es true o false
console.log(saludo.endsWith('erto'));


//busca desde del principio del string
//que incluye lo que buscamos
//indicando si es true o false
console.log(saludo.includes('concierto'));

//Condicional



    
