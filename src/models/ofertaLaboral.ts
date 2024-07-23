// Oferta laboral
// ● id
// ● fechaCreacion
// ● descripcion
// ● cargo
// ● region
// ● tipo (Remoto , Presencial o Hibrido)
// ● estado (abierta / Cerrada)
// ● empresa
// ● postulaciones
import { Empresa } from "./empresa";
import { Postulacion } from "./postulacion";
export class OfertaLaboral{
    id: number;
    fechaCreacion: Date;
    descripcion: string;
    cargo: string;
    region: string;
    tipo: string;
    estado: boolean;
    empresa: Empresa;
    postulaciones: Postulacion[];
    constructor(id: number, fechaCreacion: Date, descripcion: string, cargo: string, region: string, tipo: string, estado: boolean, empresa: Empresa, postulaciones: Postulacion[]){
        this.id = id;
        this.fechaCreacion = fechaCreacion;
        this.descripcion = descripcion;
        this.cargo = cargo;
        this.region = region;
        this.tipo = tipo;
        this.estado = estado;
        this.empresa = empresa;
        this.postulaciones = postulaciones;
    }
}