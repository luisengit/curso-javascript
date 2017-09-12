// let myObj = {
//     nombre: 'Luisen',
//     saludar() {
//         console.log(`Hola ${this.nombre}`);
//     }
// };

// myObj.saludar();

// 'use strict'
// function checkThis() {
//     console.log(this);
// }
// checkThis();



// Lexical this

function Boy(edad) {
    this.edad = 0;    
    setInterval(() => { this.edad++ }, 1000)
}

let enaitz = new Boy();