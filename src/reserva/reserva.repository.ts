import { Injectable } from '@nestjs/common';

@Injectable()
export default class ReservaRepository {
  private list_revervas = [];

  async create(reserva) {
    this.list_revervas.push(reserva);
  }

  async list() {
    return this.list_revervas;
  }
}
