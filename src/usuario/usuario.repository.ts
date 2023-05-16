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
    async isExists (email : string) {
        const usuario_ok = this.list_usuarios.find( usuario => usuario.email === email);
        return usuario_ok !== undefined;
    }
}