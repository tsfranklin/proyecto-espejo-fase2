export class TaskManager {
    // PROPIEDADES PRIVADAS (Requisito obligatorio: nadie de fuera puede tocarlas)
    tareas;
    filtroActual;
    // Referencias privadas a los elementos del HTML donde pintamos
    listaContenedor;
    loadingState;
    // CONSTRUCTOR: Inicializa el entorno, comprueba datos previos y arranca la carga
    constructor() {
        this.filtroActual = 'Todas';
        this.listaContenedor = document.querySelector('#lista-tareas');
        this.loadingState = document.querySelector('#loading-state');
        // Comprobamos si hay datos previos guardados en el navegador (LocalStorage)
        const datosPrevios = localStorage.getItem('devtask_tareas');
        if (datosPrevios) {
            this.tareas = JSON.parse(datosPrevios);
        }
        else {
            // Si no hay datos previos, cargamos tus 3 tareas iniciales de la Fase 1
            this.tareas = [
                { id: 1, titulo: 'Aprender la sintaxis de ES6', prioridad: 'Alta', completada: true },
                { id: 2, titulo: 'Dominar la asincronía y Fetch', prioridad: 'Media', completada: false },
                { id: 3, titulo: 'Migrar el proyecto a Angular', prioridad: 'Baja', completada: false }
            ];
        }
        // Arrancamos la simulación asíncrona de 1.5 segundos
        this.inicializarApp();
    }
    // Método privado para guardar cambios en la memoria del navegador
    guardarDatos() {
        localStorage.setItem('devtask_tareas', JSON.stringify(this.tareas));
    }
    // Simulación AJAX de 1.5 segundos igual que en tu Fase 1
    async inicializarApp() {
        await new Promise(resolve => setTimeout(resolve, 1500));
        this.loadingState.style.display = 'none';
        this.pintarTareas();
    }
    // MÉTODO PÚBLICO 1: Añadir una tarea nueva con timestamp (Date.now())
    agregarTarea(tituloTexto, prioridadSeleccionada) {
        const nuevaTarea = {
            id: Date.now(),
            titulo: tituloTexto,
            prioridad: prioridadSeleccionada,
            completada: false
        };
        // Actualización inmutable con spread operator (...)
        this.tareas = [...this.tareas, nuevaTarea];
        this.guardarDatos();
        this.pintarTareas();
    }
    // MÉTODO PÚBLICO 2: Cambiar el estado (Completada / Pendiente) de forma inmutable
    cambiarEstado(idBuscar) {
        this.tareas = this.tareas.map(t => {
            if (t.id === idBuscar) {
                return { ...t, completada: !t.completada };
            }
            return t;
        });
        this.guardarDatos();
        this.pintarTareas();
    }
    // MÉTODO PÚBLICO 3: Cambiar el filtro activo
    cambiarFiltro(nuevoFiltro) {
        this.filtroActual = nuevoFiltro;
        this.pintarTareas();
    }
    // MÉTODO PÚBLICO 4: Dibujar las tareas en el DOM conservando tus clases CSS
    pintarTareas() {
        this.listaContenedor.innerHTML = '';
        const tareasFiltradas = this.tareas.filter(tarea => {
            if (this.filtroActual === 'Todas')
                return true;
            if (this.filtroActual === 'Pendientes')
                return !tarea.completada;
            if (this.filtroActual === 'Completadas')
                return tarea.completada;
            return true;
        });
        tareasFiltradas.forEach(tarea => {
            const li = document.createElement('li');
            li.classList.add('item-tarea', tarea.prioridad);
            if (tarea.completada) {
                li.classList.add('completada');
            }
            li.innerHTML = `
        <span>${tarea.titulo}</span>
        <button class="btn-toggle">
          ${tarea.completada ? 'Desmarcar' : 'Completar'}
        </button>
      `;
            // Capturamos el botón asegurando a TypeScript que es un HTMLButtonElement
            const botonToggle = li.querySelector('.btn-toggle');
            botonToggle.addEventListener('click', () => {
                this.cambiarEstado(tarea.id);
            });
            this.listaContenedor.appendChild(li);
        });
    }
}
//# sourceMappingURL=TaskManager.js.map