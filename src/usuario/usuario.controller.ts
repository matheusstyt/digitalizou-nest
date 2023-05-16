/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Body } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { usuarioDTO } from './dto/usuario.dto';

@Controller('/usuarios')
export class UsuarioController {
    
    constructor ( private usuario_repository : UsuarioRepository ) {}

    @Post()
    async create_usuario(@Body() dados : usuarioDTO) {

        this.usuario_repository.create(dados);

       return dados 
    }
    @Get()
    async list_usuarios () {
        return this.usuario_repository.list()
    }
}
