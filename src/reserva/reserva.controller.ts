import { Body, Controller, Get, Post } from '@nestjs/common';
import ReservaRepository from './reserva.repository';
import reservaDTO from './dto/reserva.dto';
import { ReservaEntity } from './reserva.entity';
import { ReservaServices } from './reserva.services';
@Controller('/reserva')
export default class ReservaController {
  constructor(
    private reserva_repository: ReservaRepository,
    private reserva_services: ReservaServices,
  ) {}
  @Post()
  async create_reserva(@Body() dados: reservaDTO) {
    const reservaEntity = new ReservaEntity();
    reservaEntity.mesa = dados.mesa;
    reservaEntity.cliente_name = dados.cliente_name;
    reservaEntity.horario_entrada = dados.horario_entrada;
    reservaEntity.tempo = dados.tempo;
    await this.reserva_services.create_reserva(reservaEntity);
    return dados;
  }
  @Get()
  async list_reservas() {
    const lista_reservas = await this.reserva_services.list_reserva();
    return lista_reservas;
  }
}
