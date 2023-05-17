import { Body, Controller, Get, Post } from '@nestjs/common';
import ReservaRepository from './reserva.repository';
import reservaDTO from './dto/reserva.dto';
import { ReservaEntity } from './reserva.entity';

@Controller('/reserva')
export default class ReservaController {
  constructor(private reserva_repository: ReservaRepository) {}
  @Post()
  async create_reserva(@Body() dados: reservaDTO) {
    const reservaEntity = new ReservaEntity();
    reservaEntity.mesa = dados.mesa;
    reservaEntity.cliente_name = dados.cliente_name;
    reservaEntity.horario_entrada = dados.horario_entrada;
    reservaEntity.tempo = dados.tempo;
    this.reserva_repository.create(reservaEntity);
    return dados;
  }
  @Get()
  async list_reservas() {
    return this.reserva_repository.list();
  }
}
