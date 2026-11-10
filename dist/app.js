import { TaskManager } from './models/TaskManager.js';
// 1. Creamos el gestor (esto ejecuta el constructor automáticamente)
const gestor = new TaskManager();
// 2. Capturamos los elementos del HTML diciendo exactamente de qué tipo son (sin usar 'any')
const formulario = document.querySelector('#form-tareas');
const inputTitulo = document.querySelector('#input-titulo');
const selectPrioridad = document.querySelector('#select-prioridad');
const botonesFiltro = document.querySelectorAll('.btn-filtro');
// 3. Evento para enviar el formulario
formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const tituloTexto = inputTitulo.value.trim();
    // Le aseguramos a TypeScript que el valor del <select> cumple con el tipo Prioridad
    const prioridadSeleccionada = selectPrioridad.value;
    if (!tituloTexto)
        return;
    // Llamamos al botón público de nuestra caja fuerte
    gestor.agregarTarea(tituloTexto, prioridadSeleccionada);
    formulario.reset();
});
// 4. Evento para los botones de filtrado
botonesFiltro.forEach(boton => {
    boton.addEventListener('click', (event) => {
        // Quitamos la clase 'active' al botón que la tenía antes
        const botonActivo = document.querySelector('.btn-filtro.active');
        if (botonActivo) {
            botonActivo.classList.remove('active');
        }
        // Casteamos el botón pulsado como HTMLElement para poder acceder a classList y dataset
        const botonPulsado = event.currentTarget;
        botonPulsado.classList.add('active');
        const nuevoFiltro = botonPulsado.dataset.filtro;
        if (nuevoFiltro) {
            gestor.cambiarFiltro(nuevoFiltro);
        }
    });
});
//# sourceMappingURL=app.js.map