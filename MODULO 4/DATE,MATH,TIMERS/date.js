/*
* Date require ser instanciado para usarse
*/

//instanciamos el objeto Date
// Creamos un objeto que contiene la fecha y hora del momento de ejecución del código
// let date = new Date(),
//     date2 = new Date();
// date.setFullYear(1979); //establezco el año
// date.setMinutes(58); //establezco los minutos
// date.setHours(20); //establezco la hora
// date.setDate(21); //establezco el dia
// date.setMonth(11); //establezco el mes
// console.log(date);
// console.log(date2);

/*
* Métodos get
*
* .getFullYear() //devuelve el año
* .getMonth() 0 -> enero
* .getHours()
* .getDate()
* .getMonth()
* .getHours()
* .getMiliseconds()
* .getDate() -> Fecha del mes
* .getDay() -> Dia de la semana (0 -> domingo)
* .getTime() -> milisegundos desde el 1 de enero de 1970
*/

// let date = new Date();
// console.log(date.getTime());

/* Ejercicio 1: Imprimir la fecha y hora en nuestro formato personalizado */

// let date = new Date();

// let getStringDay = date => {
//     let days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
//     return days[date.getDay()];
// };

// let getStringMonth = date => {
//     let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
//     return months[date.getMonth()];
// };

// let hourLeadingZero = num => ('0' + num).slice(-2);

// let getAmPmHour = date => {
//     let hours = date.getHours(),
//         minutes = date.getMinutes(),
//         amPm = hours >= 12 ? 'pm' : 'am';
//     if ( amPm === 'pm' ) hours -= 12;
//     return `${hourLeadingZero(hours)}:${hourLeadingZero(minutes)}${amPm}`
// };


// let dateFormated = `${getStringDay(date)} ${date.getDate()} de ${getStringMonth(date)} de ${date.getFullYear()}, ${getAmPmHour(date)}`;

// console.log(dateFormated);

/* 
Definir fechas 
new Date(año,mes,dia,horas,minutos,segundos,milisegundos)
new Date(string)
*/
// console.log(new Date('3/1/1979'));
// console.log(new Date('Mar 01 1979 23:00:00 GMT+0200'));


/* Operaciones con fechas 
* Se operan con milisegundos (ms)
* 1s = 1000ms
* 1m = 1000ms * 60
* 1h = 1000ms * 60 * 60
* 1d = 1000ms * 60 * 60 * 24
* 1y = 1000ms * 60 * 60 * 24 * 365
*/

let msToDateOj = ms => {
    let seconds = Math.floor(ms / 1000),
        minutes = Math.floor(ms / (1000 * 60)),
        hours = Math.floor(ms / (1000 * 60 * 60)),
        days = Math.floor(ms / (1000 * 60 * 60 * 24)),
        months = Math.floor(ms / (1000 * 60 * 60 * 24 * 30)),
        years = Math.floor(ms / (1000 * 60 * 60 * 24 * 365));
    return { years, months, days,hours,minutes,seconds }        
};

let msToExpandDateObj = ms => {
    let years = msToDateOj(ms).years,        
        days = msToDateOj(ms).days % 365,
        hours = msToDateOj(ms).hours % 24,
        minutes = msToDateOj(ms).minutes % 60,
        seconds = msToDateOj(ms).seconds % 60;
        return { years,days,hours,minutes,seconds }   
};

let date = new Date(),
    date2 = new Date('Mar 01 1979 23:00:00 GMT+0200');
console.log(msToExpandDateObj(date-date2));


/*
* Horarios y fechas internacionales
* .getUTC...
* .getTimeZoneOffset() -> la diferencia en minutos respecto al meridiano de Gremwich
*/

let date = new Date();
console.log(date.getHours());
console.log(date.getUTCHours());
console.log(date.getTimezoneOffset());

















