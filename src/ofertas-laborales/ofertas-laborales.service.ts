import { Injectable } from '@nestjs/common';
import { OfertaLaboral } from 'src/models/ofertaLaboral';
import { Empresa } from 'src/models/empresa';

@Injectable()
export class OfertasLaboralesService {
    private ofertasLaborales: OfertaLaboral[] = [];
    /**
     * Agrega la oferta laboral ingresada al registro de empresas.
     * Le asigna una id sumando 1 a la id de la última oferta laboral del registro.
     */
    crearOfertaLaboral(oferta: OfertaLaboral): void{
        if(this.ofertasLaborales.length > 0){
            oferta.id = this.ofertasLaborales[this.ofertasLaborales.length - 1].id + 1 
        }
        else{
            oferta.id = 1;
        }
        this.ofertasLaborales.push(oferta);
    }
    /**
     * Retorna la oferta laboral que coincida con el id ingresado.
     */
    ofertaPorId(id: number): OfertaLaboral{
        for(let oferta of this.ofertasLaborales){
            if(oferta.id == id){
                return oferta;
            }
        }
    }
    /**
     * Elimina del registro la oferta laboral que coincida con el id ingresado.
     */
    eliminarPorId(id: number): void{
        let identificador: number = -1;
        for(let i: number = 0; i < this.ofertasLaborales.length; i++){
            if(this.ofertasLaborales[i].id == id){
                identificador = i;
            }
        }
        if(identificador != -1){
            this.ofertasLaborales.splice(identificador, 1);
        }
    }
    /**
     * Devuelve un arreglo con las ofertas laborales cuya empresa coincida con el nombre ingresado.
     * Si no se define un arreglo de ofertas laborales como argumento, tomará como referencia el registro total de ofertas laborales.
     */
    filtrarPorEmpresa(nombreEmpresa: string, ofertas?: OfertaLaboral[]): OfertaLaboral[]{
        let coincidencias: OfertaLaboral[] = [];
        if(ofertas){
            for(let oferta of ofertas){
                if(oferta.getEmpresa().nombre == nombreEmpresa){
                    coincidencias.push(oferta);
                }
            }
        }
        else{
            for(let oferta of this.ofertasLaborales){
                if(oferta.getEmpresa().nombre == nombreEmpresa){
                    coincidencias.push(oferta);
                }
            }
        }
        return coincidencias;
    }
    /**
     * Devuelve un arreglo con las ofertas laborales cuyo estado coincida con el estado ingresado.
     * Si no se define un arreglo de ofertas laborales como argumento, tomará como referencia el registro total de ofertas laborales.
     */
    filtrarPorEstado(estado: boolean, ofertas?: OfertaLaboral[]): OfertaLaboral[]{
        let coincidencias: OfertaLaboral[] = [];
        if(ofertas){
            for(let oferta of ofertas){
                if(oferta.estado == estado){
                    coincidencias.push(oferta);
                }
            }
        }
        else{
            for(let oferta of this.ofertasLaborales){
                if(oferta.estado == estado){
                    coincidencias.push(oferta);
                }
            }
        }
        return coincidencias;
    }
    /**
     * Devuelve un arreglo con las ofertas laborales cuyo estado y nombre de empresa coincidan con el estado y el nombre ingresados.
     * Si no se define un arreglo de ofertas laborales como argumento, tomará como referencia el registro total de ofertas laborales.
     */
    filtrarPorEmpresaYEstado(nombreEmpresa: string, estado: boolean): OfertaLaboral[]{
        let porEmpresa: OfertaLaboral[] = this.filtrarPorEmpresa(nombreEmpresa);
        return this.filtrarPorEstado(estado, porEmpresa);
    }
    /**
     * Elimina del registro todas las ofertas laborales asociadas a la empresa que coincida con el id ingresado.
     */
    eliminarPorEmpresa(idEmpresa: number): void{
        let identificador: number = 0;
        while(identificador != -1){
            identificador = -1
            for(let i: number = 0; i < this.ofertasLaborales.length; i++){
                if(this.ofertasLaborales[i].empresa.id == idEmpresa){
                    identificador = i;
                }
            }
            if(identificador != -1){
                this.ofertasLaborales.splice(identificador, 1);
            }
        }
    }
}
