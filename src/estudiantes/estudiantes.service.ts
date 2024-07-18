import { Injectable } from '@nestjs/common';
import { Estudiante } from 'src/models/estudiante';

@Injectable()
export class EstudiantesService {
    private estudiantes: Estudiante[];
    /**
     * Agrega un estudiante al conjunto de registros
     */
    crearEstudiante(estudiante: Estudiante): void{
        if(!this.compararEmails(estudiante)){
            if(this.estudiantes.length > 0){
                estudiante.id = this.estudiantes[this.estudiantes.length - 1].id + 1
            }
            else{
                estudiante.id = 1
            }
            this.estudiantes.push(estudiante);
        }
    }
    /**
     * Retorna el conjunto de registros de estudiantes
     */
    obtenerConjuntoEstudiantes(): Estudiante[]{
        return this.estudiantes;
    }
    /**
     * Retorna true si el email ya está registrado
     */
    private compararEmails(estudiante: Estudiante): boolean{
        if(this.estudiantes.length > 0){
            for(let estu of this.estudiantes){
                if(estu.email == estudiante.email){
                    return true;
                }
            }
        }
        return false
    }
    /**
     * Retorna el estudiante que coincide con el id ingresado.
     */
    obtenerPorId(id: number): Estudiante{
        for(let estudiante of this.estudiantes){
            if(estudiante.id == id){
                return estudiante;
            }
        }
    }
    /**
     * Elimina el registro del estudiante cuyo id coincida con el valor ingresado.
     */
    eliminarPorId(id: number): void{
        let identificador: number = -1;
        for(let i in this.estudiantes){
            if(this.estudiantes[i].id == id){
                identificador = id;
                break;
            }
        }
        this.estudiantes.splice(identificador, 1);
    }
}
