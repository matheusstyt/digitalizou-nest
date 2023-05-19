import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../auth/usuario.auth.services';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() credentials: { email: string; senha: string }) {
    const user = await this.authService.validateUser(
      credentials.email,
      credentials.senha,
    );
    console.log(user);
    if (user) {
      return { message: 'Usuário autenticado com sucesso', user };
    } else {
      return { message: 'Credenciais inválidas' };
    }
  }
}
