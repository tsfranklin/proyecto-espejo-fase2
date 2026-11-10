import type { Prioridad } from '../interfaces/tarea.interface.js';
export declare class TaskManager {
    private tareas;
    private filtroActual;
    private listaContenedor;
    private loadingState;
    constructor();
    private guardarDatos;
    private inicializarApp;
    agregarTarea(tituloTexto: string, prioridadSeleccionada: Prioridad): void;
    cambiarEstado(idBuscar: number): void;
    cambiarFiltro(nuevoFiltro: string): void;
    pintarTareas(): void;
}
//# sourceMappingURL=TaskManager.d.ts.map