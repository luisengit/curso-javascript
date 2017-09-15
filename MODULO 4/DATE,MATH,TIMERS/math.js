/*
* Ojeto Math
* Solo tiene propiedades y métodos estaticos (no tienes que instanciarlos)
*
* Métodos
*
* .max(a,b,c.....r) -> devuelve el mayor entre una lista de nums
* .min(a,b,c.....r) -> devuelve el menor entre una lista de nums
* .random() -> numero aleatorio entre 0 y 1 (numero decimal)
* .floor() -> redondea hacia abajo un decimal
* .ceil() -> redondea hacia arriba un decimal
* .round() -> redonde un decimal a tu entero más cercano
* .pow(x,n) -> eleva x al exponente n
* .sqrt(n) -> devuelve la raiz de n
*/
// let arr = [1,2,3,7,4,5];
// // Math.max y Math.min reciben una lista y no un array
// // Con spread operator puedes expandir el array
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));


/*
* Obtener un entero aleatorio
**/
let getRandomNumber = (min,max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

let guestNumber = (min,max) => {
    let numMachine = getRandomNumber(min,max);
    let numPlayer;
    let count = 0;
    do {
        //parseInt -> convierte string en número en base decimal
        numPlayer = parseInt(prompt(`Adivina el número de la máquina (entre ${min} y ${max})`),10);
        count++;
        if (numPlayer > numMachine) {
            alert(`Tu número es mayor que el de la máquina 
            Vas ${count} ${count === 1 ? 'intento' : 'intentos' }`);
        }else if (numPlayer < numMachine) {
            alert(`Tu número es menor que el de la máquina
            Vas ${count} ${count === 1 ? 'intento' : 'intentos' }`);
        }else {
            alert(`¡¡¡Adivinaste el número en ${count} ${count === 1 ? 'intento' : 'intentos' }!!!`);
        }
    } while (numPlayer !== numMachine);
};

guestNumber(30,50);


