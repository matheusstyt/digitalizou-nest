import { Body, Controller, Get, Post } from '@nestjs/common';
import ReservaRepository from './reserva.repository';
import reservaDTO from './dto/reserva.dto';

@Controller('/reserva')
export default class ReservaController {
  constructor(private reserva_repository: ReservaRepository) {}
  @Post()
  async create_reserva(@Body() dados : reservaDTO) {
    this.reserva_repository.create(dados);
    return dados;
  }
  @Get()
  async list_reservas() {
    return this.reserva_repository.list();
  }
}
