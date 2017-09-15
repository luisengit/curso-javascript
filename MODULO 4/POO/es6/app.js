class Task {
    constructor(name) {
        this.name = name;
        this.isComplete = false;
    }

    complete() {
        this.isComplete = !this.isComplete;
    }
}

class TaskList {
    constructor(name) {
        this.name = name;
        //array donde se guardan las tareas
        this.tasks = [];
    }

    addTask(task,element) {
        //se coje una tarea y se mete en el array
        this.tasks.push(task);
        this.renderTasks(element);
    }

    removeTask(i,element) { 
        //splice-> eliminar elemento array
        //se necesita sabel el indice(i) de la tarea a eliminar        
        this.tasks.splice(i,1)//2ºparam(num elems a eliminar)
        this.renderTasks(element);
    }

    renderTasks(element) { //metodo que dibuja todo en pantalla
        //this.tasks (array donde estan tareas)
        //map -> coge cada elem array transformandolo y devolviendolo en un nuevo array
        let tasks = this.tasks.map( task => `
            <li class="task ${task.isComplete ? 'complete' : ''}">
                <input type="checkbox" class="task__complete-button"
                ${task.isComplete ? 'checked' : ''}
                >
                <span class="task__name">${task.name}</span>
                <a href="#" class="task__remove-button">X</a>
            </li>
        `);
        //reduce -> a partir de un array crea un solo elemento
        element.innerHTML = tasks.reduce((a,b) => a + b, ''); //a + b concatenados
    }
}


// Trabajar con el DOM
const addTaskElement = document.getElementById('add-task');
// Elemento donde se va a dibujar
const taskContainerElement = document.getElementById('tasks-container');
 // Crear un lista a mano
const inbox = new TaskList('inbox');

// Añadir tarea desde el DOM
// param e -> se refiere al evento
function addDOMTask(e, list = inbox) {
    // Obtener el texto del input
    if (e.key == 'Enter') { //cuando presione enter

    // crear la tarea instanciando la clase
    //this -> en este contexto es el elemento en el que el evento fue ejecutado (el input) y value(el texto del input)
    let task = new Task(this.value);
    // añadir la tarea a la lista 
    list.addTask(task, taskContainerElement);
    //borrar el texto del input
    this.value = '';
    }    
    
    // console.log(e.key);//letras que escribo en input se muestran en consola
}

//escucha el evento cuando se suelta la tecla va a ejecutar la function addDOMTask
addTaskElement.addEventListener('keyup', addDOMTask);

//Obtener índice de la tarea actual
function getTaskIndex(e) {
    let taskItem = e.target.parentElement;
    let tasksItems = [...taskContainerElement.querySelectorAll('li')];
    return tasksItems.indexOf(taskItem);
}



// Eliminar tarea desde el DOM

function removeDOMTask(e, list = inbox) {
   // has hecho click en un elemento con la etiqueta A?
   //detectar que se hizo click en el enlace
    if (e.target.tagName === 'A') {      
    // remover tarea de la tista. Se necesita el índice

    list.removeTask(getTaskIndex(e),taskContainerElement);
   }

}

taskContainerElement.addEventListener('click', removeDOMTask);


// Completar la tarea

function completeDOMtask(e, list = inbox) {
    // has hecho click en un elemento con la etiqueta A?
    //detectar que se hizo click en el enlace
     if (e.target.tagName === 'INPUT') {      
     // Completar la tarea de la tista. Se necesita el índice
 
     list.tasks[getTaskIndex(e)].complete();
     e.target.parentElement.classList.toggle('complete');

    //  console.table(list.tasks);
    }
 
 }
 
 taskContainerElement.addEventListener('click', completeDOMtask);








