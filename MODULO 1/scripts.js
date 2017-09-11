console.log("Hola Mundo");
console.dir(); //envia toda la informacion del objeto

//Case Sensitive: Distingue mayus de minusc

let holaMundo = "Hola mundo";
console.log(holaMundo);

//Punto y Coma (semicolon)
// Espacios en blanco (javascript los ignora)

let precio = 125,
    impuesto = precio * 0.21,
    descuento = precio * 0.1,
    precioFinal = precio + impuesto - descuento;

console.log(precioFinal);

//En las constantes se guardan datos que no van a variar
const yearAthletic =  1898; 

//Las variables declaradas con let
//tienen un ámbito de bloque. 
//X fuera no existen
{
    let a = 'a';
    console.log(a);
}

{
    let b = 'b';
    console.log(b);
}

//JS es dinamicamente tipado
//JS está basado en prototipos
//Tipos de datos
//Primitivos y Compuestos u Objetos

//Primitivos
// string (texto)

let amigo = "Luisen KTT";
let numero = 2;
//template strings
let saludo = `Bienvenido, ${amigo}, ${numero * 2} veces`;
console.log(saludo);

// number (numeros)
let birth = 1979;
let year = new Date().getFullYear();
let edad = year - birth;

// boolean
if ('a' == 'b') {
    console.log('son iguales');
} else {
    console.log('no son iguales')
}

// undefined
    //Cuando no se le asigna un valor a una variable
    let noDefinida;

// null
    //Cuando no exite un valor

//typeof define el tipo de dato de una variable
typeof true;

// Propiedades y métodos

let uno = 'Luisen';
let dos = 'Ziortza';
let tres = 'Enaitz';
let cuatro = 'Aki';

//si la varible uno contiene la letra L
console.log(dos.indexOf('L') == 0);

    
//Compuestos u Objetos
// arrays 
// objetos
// maps 
// sets 
// funciones 

