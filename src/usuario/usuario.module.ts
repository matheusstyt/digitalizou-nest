/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuario.repository";
import { UniqueEmailValidator } from "./validation/unique_email.validator";
import { UsuarioServices } from "./usuario.services";
import { UsuarioEntity } from "./usuario.entity";
import { TypeOrmModule} from '@nestjs/typeorm';
@Module({
    imports : [TypeOrmModule.forFeature([UsuarioEntity])],
    controllers : [UsuarioController],
    providers : [UsuarioRepository, UsuarioServices, UniqueEmailValidator],
})
export  class UsuarioModule {

}