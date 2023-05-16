import { Controller, Post } from '@nestjs/common';

@Controller('/usuarios')
export class UsuarioController {
    @Post()
    async create_usuario() {
       return "usuario cadastrado!" 
    }
}
