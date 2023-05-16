import { IsEmail, IsNotEmpty, IsBoolean } from 'class-validator';
import { UniqueEmail } from '../validation/unique_email.validator';

export class usuarioDTO {
  @IsNotEmpty()
  nome: string;

  @IsEmail()
  @UniqueEmail({ message: 'Já existe um email cadastrado' })
  email: string;

  @IsNotEmpty()
  senha: string;

  @IsBoolean()
  administrador: boolean;
}
