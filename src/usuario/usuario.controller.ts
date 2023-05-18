/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Body } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { usuarioDTO } from './dto/usuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { ListaUsuarioDTO } from './dto/lista_usuarioDTO';
import { UsuarioServices } from './usuario.services';
@Controller('/usuarios')
export class UsuarioController {
    
    constructor ( 
        private usuario_repository : UsuarioRepository, 
        private usuario_services : UsuarioServices 
        ) {}

    @Post()
    async create_usuario(@Body() dados : usuarioDTO) {

        // entidade para controlar os dados de saída do json

        const usuarioEntity = new UsuarioEntity();

      //  usuarioEntity.id = uuid();
        usuarioEntity.nome = dados.nome;
        usuarioEntity.email = dados.email;
        usuarioEntity.senha = dados.senha;
        usuarioEntity.administrador = dados.administrador;
        await this.usuario_services.create_usuario(usuarioEntity);

       return { id : usuarioEntity.id, message : "usuário cadastrado com sucesso!" } 
    }
    @Get()
    async list_usuarios () {
        const lista_usuarios = await this.usuario_services.list_usuario();
        const lista_tratada = lista_usuarios.map( usuario => new ListaUsuarioDTO(usuario.id, usuario.nome));
        return lista_tratada;
    } 
}
