// Objetos
// Constantes se guardan datos que no van a variar
const ED = {
    nombre: 'KTT Tem',
    sedes: ['Bilbao', 'Pucela'],
    trabajadores: ['Luisen', 'Mario', 'Marta', 'Ziortza'],
    fundacion: 2017,
    eslogan: 'Lucha y vencerás',
    usp: 'Somos muy currantes e intuitivos',
    saludar() {
        return 'Hola que tal Pascual';
    }
};

// Operadores
    // delete -> eliminar una propiedad
    // in -> devuelve true si existe la propiedad en el objeto

    // elimina la propiedad fundacion
    // delete ED.fundacion;
    // console.log(ED);    
    // console.log('trabajadores' in ED);

    // determina si una propiedad existe en el obj
    // console.log(ED.hasOwnProperty('nombre'));

    // ES6
    // Copiar un objeto
    // let ED2 = Object.assign({}, ED);
    // console.log(ED2);

    // Asignar variables existentes a propiedades
    // let a = 'hola', b = 'mundo';
    // let myObj = {
    //     a,
    //     b
    // }
    // console.log(myObj);

    // // Expresiones en propiedades

    // let myObj2 = {
    //     [a + b]: 'Hola mundo'
    // }
    // console.log(myObj2);


    // .map()
    // .filter()
    // . reduce()

    let estudiantes = [
        {
            nombre: 'Luisen',
            calificacion: 4
        },

        {
            nombre: 'Ziortza',
            calificacion: 10
        },

        {
            nombre: 'Enaitz',
            calificacion: 9
        }

    ];

    // map(cb) recibe una funcion (callback)
    // Transforma cada elemento del array según el callback
    // Devuelve un nuevo array

    // let estudiantesNombres = [];

    // for (let i = 0; i < estudiantes.length; i++) {
    //           estudiantesNombres.push(estudiantes[i].nombre);        
    // }

    //Para cada estudiantes extraeme su nombre
    let estudiantesNombres = estudiantes.map( estudiante => estudiante.nombre);
    //console.log(estudiantesNombres);

    // .filter(cb)

    let estudiantesAprobados = estudiantes.filter( estudiante => estudiante.calificacion > 4.99);
    //console.log(estudiantesAprobados);
    let estudiantesAprobadosNombres = estudiantesAprobados.map( estudiante => estudiante.nombre);
    //console.log(estudiantesAprobadosNombres);

    // reduce(cb(prev,current,[i, arr]),[initial])
        //devuelve un solo valor
        // y ese valor es llevado a la siguiente iteración
    let numeros = [2,4,6,8,10];
    let suma = numeros.reduce( (a,b) => a+b);
    //console.log(suma);

    let numMayor = numeros.reduce( (a,b) => a > b ? a : b);
    //console.log(numMayor);

    //Obtener el promedio
    let promedio = numeros.reduce( (a,b,i,arr) => {
        b += a;
        return i == arr.length - 1 ? b / arr.length : b;
    });
    //console.log(promedio);

    let mejorEstudiante = estudiantes
                          .reduce( (a,b) =>{
                                if (a.calificacion > b.calificacion) {
                                    return {
                                        nombre: a.nombre,
                                        calificacion: a.calificacion
                                    } 
                                        
                                } else {
                                    return {
                                        nombre: b.nombre,
                                        calificacion: b.calificacion
                                    }
                                }
                                                      
                          }) 
    console.log(mejorEstudiante);