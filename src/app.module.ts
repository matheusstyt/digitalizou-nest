/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import ReservaModule from './reserva/reserva.module';

@Module({
  imports: [UsuarioModule, ReservaModule],

})
export class AppModule {}
