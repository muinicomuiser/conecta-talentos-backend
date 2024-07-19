import { Controller, Post, Get, Param, Delete, Body } from '@nestjs/common';
import { Empresa } from 'src/models/empresa';
import { EmpresasService } from './empresas.service';
@Controller('empresas')
export class EmpresasController {
    constructor(private readonly servicio: EmpresasService){}
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
    @Delete(':id')
    eliminarPorId(@Param('id') id: number): void{
        this.servicio.eliminarPorId(id);
    }
}
