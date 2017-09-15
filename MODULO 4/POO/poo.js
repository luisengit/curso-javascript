/* PROGRAMACIÓN ORIENTADA A OBJETOS */

// clase -> plantilla a partir de la cual se crean objetos
// instancia -> cada objeto creado a partir de una clase
// constructor -> función que se ejecuta automaticamente al instanciar un clase
// propiedad -> son valores
// métodos -> son funciones

// Clases en ES6
class Persona {
    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
        this.nombreCompleto = `${nombre} ${apellido}`;
    }

    saludar() {
        return `Hola, soy ${this.nombreCompleto} y vivo en ${this.pais}`;
    }

    //método estático
    static  describirPersona(persona) {
        return `Esta persona se llama ${persona.nombreCompleto} y vive en ${persona.pais}`;
    }
}

// Creamos subclase
class Profesor extends Persona {
    constructor(nombre, apellido, pais, curso) {
       
        super(nombre, apellido, pais); // traemos propiedades de la clase
        this.curso = curso;        
    }
    invitarAlCurso() {
        return `Hola, soy ${this.nombreCompleto}, profesor en Escuela digital y te invito al curso ${this.curso}. Nos vemos en clase`;
    }
}

const luisen = new Persona('Luisen','Poy', 'España');
const ziortza = new Persona('Ziortza','Arrieta', 'Euskadi');
const daniel = new Profesor('Daniel', 'Romero', 'Colombia', 'PHP');
console.log(daniel.saludar());
console.log(daniel.invitarAlCurso());

//instancia a metodo estatico
console.log(Persona.describirPersona(ziortza));

