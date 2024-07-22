import { Controller, Get, Post, Param, Delete, Body, Query } from '@nestjs/common';
import { OfertaLaboral } from 'src/models/ofertaLaboral';
import { OfertasLaboralesService } from './ofertas-laborales.service';
import { EmpresasService } from 'src/empresas/empresas.service';
@Controller('ofertas-laborales')
export class OfertasLaboralesController {    
    constructor(private readonly servicio: OfertasLaboralesService,
                private readonly servicioEmpresas: EmpresasService){}
    /**
     *Agrega una oferta laboral al registro de ofertas. Agrega la empresa de la oferta al 
     *registro de empresas, siempre y cuando la empresa no esté registrada.
     */
    @Post()
    crearOfertaLaboral(@Body() oferta: OfertaLaboral): void{
        this.servicioEmpresas.crearEmpresa(oferta.getEmpresa());
        this.servicio.crearOfertaLaboral(oferta);
    }
    @Get(':id')
    obtenerPorId(@Param('id') id: number): OfertaLaboral{
        return this.servicio.ofertaPorId(id);
    }
    @Delete(':id')
    eliminarPorId(@Param('id') id: number): void{
        this.servicio.eliminarPorId(id);
    }
    @Get()
    obtenerPorEmpresaYEstado(@Query('nombre') nombreEmpresa: string, @Query('estado') estado: boolean): OfertaLaboral[]{
        return this.servicio.filtrarPorEmpresaYEstado(nombreEmpresa, estado);
    }


}
