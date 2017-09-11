//loops

//for

// let equipos = ['Athletic', 'Barsa', 'Madrid', 'Atletico', 'Valencia'];

// for ( let i = 0; i < equipos.length; i++) {
//     //equipos que empiecen por A
//     if(equipos[i].toUpperCase().indexOf('A') == 0)
//     {
//         continue; //se para en el primer equipo que empieza por A
//     }
//     console.log(equipos[i]);
// }

//break, sale del ciclo
//continue, se salta una iteracción del ciclo

// While

// let i = 100;
// while(i--) {
//     console.log('hola que tal Pascual');
// } 

// // Do While

// let password = 'ED'
// let pass;

// do {
//     pass = prompt('Introduzca la contraseña');
// } while (pass != 'ED');

// for of (ES6)

//value te devuelve el valor
let equipos = ['Athletic', 'Barsa', 'Madrid', 'Atletico', 'Valencia'];

for (let equipo of equipos) {
    console.log(equipo);
}