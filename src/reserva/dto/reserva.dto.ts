import { IsNotEmpty } from 'class-validator';
import { VerificarHorario } from '../validation/unique_horario.validator';
import { HorarioPermitido } from '../validation/fora_funcionamento.validator';

export default class reservaDTO {
  @IsNotEmpty()
  mesa: string;

  @IsNotEmpty()
  cliente_name: string;

  @IsNotEmpty()
  tempo: string;

  @IsNotEmpty()
  @VerificarHorario({ message: 'Já existe reserva nesse horário, nessa mesa' })
  @HorarioPermitido({ message: 'Fora do funcionamento do estabelecimento' })
  horario_entrada: string;
}
