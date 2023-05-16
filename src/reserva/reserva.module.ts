import { Module } from '@nestjs/common';
import ReservaController from './reserva.controller';
import ReservaRepository from './reserva.repository';

@Module({
  controllers: [ReservaController],
  providers: [ReservaRepository],
})
export default class ReservaModule {}
