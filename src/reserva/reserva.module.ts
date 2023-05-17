import { Module } from '@nestjs/common';
import ReservaController from './reserva.controller';
import ReservaRepository from './reserva.repository';
import { UniqueHorarioValidator } from './validation/unique_horario.validator';
import { ForaFuncionamentoValidator } from './validation/fora_funcionamento.validator';

@Module({
  controllers: [ReservaController],
  providers: [
    ReservaRepository,
    UniqueHorarioValidator,
    ForaFuncionamentoValidator,
  ],
})
export default class ReservaModule {}
