import { Module } from '@nestjs/common';
import ReservaController from './reserva.controller';
import ReservaRepository from './reserva.repository';
import { UniqueHorarioValidator } from './validation/unique_horario.validator';
import { ForaFuncionamentoValidator } from './validation/fora_funcionamento.validator';
import { ReservaServices } from './reserva.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservaEntity } from './reserva.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReservaEntity])],
  controllers: [ReservaController],
  providers: [
    ReservaRepository,
    ReservaServices,
    UniqueHorarioValidator,
    ForaFuncionamentoValidator,
  ],
})
export default class ReservaModule {}
