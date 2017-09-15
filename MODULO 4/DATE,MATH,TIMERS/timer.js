/*
* Timers
* 
* setTimeout(cb, t) //espera el tiempo que se le indica y ejecuta la función
* setInterval(cb, t) //va a ejecutar la funcion repetidamente
* 
*/

// let count = 0;

// setTimeout(function(){
//     counter(1);
// }, 3000);

// let myInterval = setInterval(function(){
//     console.log(++count);
//     if (count == 5) {
//         clearInterval(myInterval);
//     }
// }, 1000);

// console.log(myInterval);

/*
* Ejercicio: reloj
*/

// let reloj = setInterval(function(){
//     //toLocaleString: para entender la fecha de manera humana
//     document.body.innerHTML = new Date().toLocaleString();
// }, 1000);


/*
Ejercicio: Cuenta atrás
*/

// let countDown = ms => {
//     let myCountDown = setInterval(function(){
//         ms -= 1000;
//         let minutes = Math.floor(ms/(1000 * 60)),
//             seconds = Math.floor((ms % (1000 * 60)) / 1000);
//         document.body.innerHTML = `Quedan ${minutes} minutos y ${seconds} segundos`;
//         if(ms === 0) {
//             clearInterval(myCountDown);
//             document.body.innerHTML = `Tiempo Cumplido`;
//         }

//     },1000)
// };

// countDown(80000);


let writing = str => {
    let arrFromStr = str.split('');
    let i = 0;
    let printStr = setInterval(function(){
        if(arrFromStr[i] === ' ') {
            document.body.innerHTML += arrFromStr[i];
            document.body.innerHTML += arrFromStr[i + 1];
            i += 2;

        } else {
        document.body.innerHTML += arrFromStr[i];
        i++
        }
        if (i === arrFromStr.length) {
            clearInterval(printStr);
            document.body.style.color = 'steelblue';
        }
    },300);
};

writing('Bienvenidos a Escuela Digital');