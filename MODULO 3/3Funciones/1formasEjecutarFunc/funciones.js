// Formas de ejecutar Funciones
/*
* Las funciones son bloques de código reutilizables
* 
* function nombreFuncion(parametro1, parametro2, parametro3) {
*    // codigo
* } 
* los parametros son los valores que va a ejecutar la funcion en su cuerpo
* Se espera que una función retorne un valor
* Cuando encuentra la palabra return, se acaba
*/

function sumar(a,b) {
    if (a > b) {
        return a + b;
    }

    return b;
}

// console.log(sumar(5,2));

// Otra forma de llamar a la función
let obj = {
    nombre: 'objeto',
    sumar(a,b) {
        return a + b;
    }
};

let miOtraSuma = obj.sumar(4,7);
// console.log(miOtraSuma);

/* Funcion dentro de otra función*/
function restar(a) {
    return function(b) {
        return a - b;
    } 
}

let miResta = restar(5)(3);
// console.log(miResta);


/* Funciones autoinvocadas */
let miMultiplicacion = (function(a,b) {
    return a * b;
})(5,2);

//los parentesis que encierran la func la convierten 
// en una expresión que se puede ejecutar

// console.log(miMultiplicacion);



/* Función constructora */
let Pais = function(nombre,moneda) {
    this.nombre = nombre;
    this.moneda = moneda;
};

let spain = new Pais('Spain','Euro');
// console.log(spain);



// apply() y call() 
function add(a,b,c) {
    return a + b + c;
}

let numeros = [2,3,4];

let myAdd = add.apply(undefined,numeros);
console.log(myAdd);

let myOtherAdd = add.call(undefined,2,3,4)
console.log(myOtherAdd);







