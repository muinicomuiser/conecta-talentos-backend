import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesController } from './estudiantes/estudiantes.controller';
import { EmpresasController } from './empresas/empresas.controller';
import { PostulacionesController } from './postulaciones/postulaciones.controller';
import { OfertasLaboralesController } from './ofertas-laborales/ofertas-laborales.controller';
import { EstudiantesService } from './estudiantes/estudiantes.service';

@Module({
  imports: [],
  controllers: [AppController, EstudiantesController, EmpresasController, PostulacionesController, OfertasLaboralesController],
  providers: [AppService, EstudiantesService],
})
export class AppModule {}
