import { Injectable } from '@nestjs/common';
import { Empresa } from 'src/models/empresa';

@Injectable()
export class EmpresasService {
    private empresas: Empresa[] = [];
    crearEmpresa(empresa: Empresa): void{
        if(!this.compararNombres(empresa)){
            if(this.empresas.length > 0){
                empresa.id = this.empresas[this.empresas.length - 1].id + 1;
                this.empresas.push(empresa); 
            }
            else{
                empresa.id = 1;
                this.empresas.push(empresa);
            }
        }
    }
    obtenerPorId(id: number): Empresa{
        for(let i: number = 0; i < this.empresas.length; i++){
            if(this.empresas[i].id == id){
                return this.empresas[i];
            }
        }
    }
    obtenerConjuntoEmpresas(): Empresa[]{
        return this.empresas;
    }
    eliminarPorId(id: number): void{
        let identificador: number = -1;
        for(let i: number = 0; i < this.empresas.length; i++){
            if(this.empresas[i].id == id){
                identificador = i;
            }
        }
        if(identificador != -1){
            this.empresas.splice(identificador, 1);
        }
    }
    /**
     * Retorna true si el nombre de la empresa ingresada ya fue registrado
     */
    compararNombres(empresaIngresada: Empresa): boolean{
        for(let empresaRegistrada of this.empresas){
            if(empresaIngresada.nombre == empresaRegistrada.nombre){
                return true;
            }
        }
        return false;
    }
}
