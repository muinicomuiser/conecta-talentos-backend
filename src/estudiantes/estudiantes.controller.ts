import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { Estudiante } from 'src/models/estudiante';
import { EstudiantesService } from './estudiantes.service';
@Controller('estudiantes')
export class EstudiantesController {
    constructor(private readonly serivicio: EstudiantesService){}
    @Get()
    obtenerEstudiantes(): Estudiante[]{
        return this.serivicio.obtenerConjuntoEstudiantes();
    }
    @Get(':id')
    obtenerPorId(@Param('id') id: number): Estudiante{
        return this.serivicio.obtenerPorId(id);
    }
    @Post()
    crearEstudiante(@Body() estudiante: Estudiante): void{
        this.serivicio.crearEstudiante(estudiante);
    }
    @Delete(':id')
    eliminarPorId(@Param('id') id: number): void{
        this.eliminarPorId(id);
    }
}
