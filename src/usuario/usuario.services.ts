import { Injectable } from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm';
import { ListaUsuarioDTO } from './dto/lista_usuarioDTO';
import { UsuarioEntity } from './usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioServices {
  constructor(
    @InjectRepository(UsuarioEntity)
    private usuarioRepository: Repository<UsuarioEntity>,
  ) {}
  async create_usuario(usuarioEntity: UsuarioEntity) {
    await this.usuarioRepository.save(usuarioEntity);
  }
  async list_usuario() {
    const usuarios_query = await this.usuarioRepository.find();
    return usuarios_query;
  }
  async isExists(email: string) {
    const usuario_ok = (await this.list_usuario()).find(
      (usuario) => usuario.email === email,
    );
    return usuario_ok != undefined;
  }
}
