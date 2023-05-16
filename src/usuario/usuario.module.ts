/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuario.repository";
import { UniqueEmailValidator } from "./validation/unique_email.validator";

@Module({
    imports : [],
    controllers : [UsuarioController],
    providers : [UsuarioRepository,  UniqueEmailValidator],
})
export  class UsuarioModule {

}