import { IsNotEmpty } from 'class-validator';

export default class reservaDTO {
  @IsNotEmpty()
  mesa: string;

  @IsNotEmpty()
  cliente_name: string;

  @IsNotEmpty()
  horario_entrada: string;

  @IsNotEmpty()
  tempo: string;
}
