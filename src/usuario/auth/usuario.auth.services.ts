import { Injectable } from '@nestjs/common';
import { UsuarioServices } from '../usuario.services';

@Injectable()
export class AuthService {
  constructor(private usuarioServices: UsuarioServices) {}

  async validateUser(email: string, senha: string): Promise<any> {
    const temp_list_usuarios = await this.usuarioServices.list_usuario();

    for (const usuario of temp_list_usuarios) {
      if (email === usuario.email && senha === usuario.senha) {
        const body = { id: usuario.id, email: usuario.email };
        console.log(body);
        return body;
      }
    }

    return null;
  }
}
