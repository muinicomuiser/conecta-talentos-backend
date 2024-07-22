import { Controller, Post, Get, Param, Delete, Body } from '@nestjs/common';
import { Empresa } from 'src/models/empresa';
import { EmpresasService } from './empresas.service';
import { OfertasLaboralesService } from 'src/ofertas-laborales/ofertas-laborales.service';
@Controller('empresas')
export class EmpresasController {
    constructor(private readonly servicio: EmpresasService,
                private readonly servicioOfertas: OfertasLaboralesService){}
    @Get()
    obtenerEmpresas(): Empresa[]{
        return this.servicio.obtenerConjuntoEmpresas();
    }
    @Get(':id')
    obtenerPorId(@Param('id') id: number): Empresa{
        return this.servicio.obtenerPorId(id);
    }
    @Post()
    crearEmpresa(@Body() empresa: Empresa): void{
        this.servicio.crearEmpresa(empresa);
    }
    /**
     * Elimina la empresa con el id ingresado y todas las ofertas laborales asociadas a esa empresa.
     */
    @Delete(':id')
    eliminarPorId(@Param('id') id: number): void{
        this.servicio.eliminarPorId(id);
        this.servicioOfertas.eliminarPorEmpresa(id);
    }
}
