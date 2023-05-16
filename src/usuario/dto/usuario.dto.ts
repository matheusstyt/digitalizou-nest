import { IsEmail, IsNotEmpty, IsBoolean } from 'class-validator';

export class usuarioDTO {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  senha: string;

  @IsBoolean()
  administrador: boolean;
}
