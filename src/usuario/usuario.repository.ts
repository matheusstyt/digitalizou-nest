/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";

@Injectable()
export class UsuarioRepository {
    private list_usuarios = [];
    
    async create ( usuario ) {
        this.list_usuarios.push(usuario);
    }
    async list () {
        return this.list_usuarios
    }
}