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
    // sqlite3
    // TypeOrmModule.forRoot({
    //   type: 'sqlite',
    //   database: './db/restaurante.db',
    //   entities: [__dirname + '/**/*.entity{.js,.ts}'],
    //   synchronize: true,
    // }),

    //mysql 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3303,
      username: 'root',
      password: 'usbw',
      database: 'teste',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ConfigModule.forRoot({
      isGlobal : true
    }),
],
})
export class AppModule {}
