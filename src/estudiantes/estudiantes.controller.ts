import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { Estudiante } from 'src/models/estudiante';
import { EstudiantesService } from './estudiantes.service';
@Controller('estudiantes')
export class EstudiantesController {
    constructor(private readonly servicio: EstudiantesService){}
    @Get()
    obtenerEstudiantes(): Estudiante[]{
        return this.servicio.obtenerConjuntoEstudiantes();
    }
    @Get(':id')
    obtenerPorId(@Param('id') id: number): Estudiante{
        return this.servicio.obtenerPorId(id);
    }
    @Post()
    crearEstudiante(@Body() estudiante: Estudiante): void{
        this.servicio.crearEstudiante(estudiante);
    }
    @Delete(':id')
    eliminarPorId(@Param('id') id: number): void{
        this.eliminarPorId(id);
    }
}
