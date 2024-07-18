// Empresa
// ● id
// ● nombre
// ● sitioWeb ej: https://www.globant.com
// ● tipo (pequeña/mediana/grande)
export class Empresa{
    id: number;
    nombre: string;
    sitioWeb: string;
    tipo: string;
    constructor(id: number, nombre: string, sitioWeb: string, tipo: string){
        this.id = id;
        this.nombre = nombre;
        this.sitioWeb = sitioWeb;
        this.tipo = tipo;
    }
}