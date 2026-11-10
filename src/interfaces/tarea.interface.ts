// Definimos los únicos 3 textos permitidos para la prioridad
export type Prioridad = 'Alta' | 'Media' | 'Baja';

// Contrato estricto que debe cumplir cualquier tarea en nuestra app
export interface Tarea {
  id: number;
  titulo: string;
  prioridad: Prioridad;
  completada: boolean;
}