// Postulación
// ● id
// ● fechaPostulacion
// ● estudiante
// ● estado (Pendiente / Aprobado / Rechazado)
import { Estudiante } from "./estudiante";
export class Postulacion{
    id: number;
    fechaPostulacion: Date;
    estudiante: Estudiante
    estado: string; //Podría ser un number -> -1, 0, 1
    constructor(id: number, fechaPostulacion: Date, estudiante: Estudiante, estado: string){
        this.id = id;
        this.fechaPostulacion = fechaPostulacion;
        this.estudiante = estudiante;
        this.estado = estado;
    }
}