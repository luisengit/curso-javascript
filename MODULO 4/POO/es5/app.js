'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
    function Task(name) {
        _classCallCheck(this, Task);

        this.name = name;
        this.isComplete = false;
    }

    _createClass(Task, [{
        key: 'complete',
        value: function complete() {
            this.isComplete = !this.isComplete;
        }
    }]);

    return Task;
}();

var TaskList = function () {
    function TaskList(name) {
        _classCallCheck(this, TaskList);

        this.name = name;
        //array donde se guardan las tareas
        this.tasks = [];
    }

    _createClass(TaskList, [{
        key: 'addTask',
        value: function addTask(task, element) {
            //se coje una tarea y se mete en el array
            this.tasks.push(task);
            this.renderTasks(element);
        }
    }, {
        key: 'removeTask',
        value: function removeTask(i, element) {
            //splice-> eliminar elemento array
            //se necesita sabel el indice(i) de la tarea a eliminar        
            this.tasks.splice(i, 1); //2ºparam(num elems a eliminar)
            this.renderTasks(element);
        }
    }, {
        key: 'renderTasks',
        value: function renderTasks(element) {
            //metodo que dibuja todo en pantalla
            //this.tasks (array donde estan tareas)
            //map -> coge cada elem array transformandolo y devolviendolo en un nuevo array
            var tasks = this.tasks.map(function (task) {
                return '\n            <li class="task ' + (task.isComplete ? 'complete' : '') + '">\n                <input type="checkbox" class="task__complete-button"\n                ' + (task.isComplete ? 'checked' : '') + '\n                >\n                <span class="task__name">' + task.name + '</span>\n                <a href="#" class="task__remove-button">X</a>\n            </li>\n        ';
            });
            //reduce -> a partir de un array crea un solo elemento
            element.innerHTML = tasks.reduce(function (a, b) {
                return a + b;
            }, ''); //a + b concatenados
        }
    }]);

    return TaskList;
}();

// Trabajar con el DOM


var addTaskElement = document.getElementById('add-task');
// Elemento donde se va a dibujar
var taskContainerElement = document.getElementById('tasks-container');
// Crear un lista a mano
var inbox = new TaskList('inbox');

// Añadir tarea desde el DOM
// param e -> se refiere al evento
function addDOMTask(e) {
    var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : inbox;

    // Obtener el texto del input
    if (e.key == 'Enter') {
        //cuando presione enter

        // crear la tarea instanciando la clase
        //this -> en este contexto es el elemento en el que el evento fue ejecutado (el input) y value(el texto del input)
        var task = new Task(this.value);
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
    var taskItem = e.target.parentElement;
    var tasksItems = [].concat(_toConsumableArray(taskContainerElement.querySelectorAll('li')));
    return tasksItems.indexOf(taskItem);
}

// Eliminar tarea desde el DOM

function removeDOMTask(e) {
    var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : inbox;

    // has hecho click en un elemento con la etiqueta A?
    //detectar que se hizo click en el enlace
    if (e.target.tagName === 'A') {
        // remover tarea de la tista. Se necesita el índice

        list.removeTask(getTaskIndex(e), taskContainerElement);
    }
}

taskContainerElement.addEventListener('click', removeDOMTask);

// Completar la tarea

function completeDOMtask(e) {
    var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : inbox;

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