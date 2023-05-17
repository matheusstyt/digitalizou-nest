/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import ReservaModule from './reserva/reserva.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBConfigService } from './config/db.config.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UsuarioModule, 
    ReservaModule, 
    TypeOrmModule.forRootAsync({
      useClass : DBConfigService,
      inject: [DBConfigService]
    }),
    ConfigModule.forRoot({
      isGlobal : true
    }),
],
})
export class AppModule {}
