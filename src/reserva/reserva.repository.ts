import { Injectable } from '@nestjs/common';

@Injectable()
export default class ReservaRepository {
  isValid(value: string): boolean {
    const data_atual = new Date(value);
    const hora_atual = data_atual.getHours();
    const minuto_atual = data_atual.getMinutes();
    const hora_minima = 18;
    const minuto_minimo = 0;
    const hora_maxima = 23;
    const minuto_maximo = 59;

    return !(
      (hora_atual > hora_minima ||
        (hora_atual === hora_minima && minuto_atual >= minuto_minimo)) &&
      (hora_atual < hora_maxima ||
        (hora_atual === hora_maxima && hora_atual <= minuto_maximo))
    );
  }
  private list_revervas = [];

  async create(reserva) {
    this.list_revervas.push(reserva);
  }

  async list() {
    return this.list_revervas;
  }
  isExists(horario: string, tempo: string, mesa: string): boolean {
    // cálculo do horário de saída da reserva em questão
    const horario_entrada_request = new Date(horario);
    const horario_saida_request = new Date(
      horario_entrada_request.getTime() + this.parseTempo(tempo),
    );

    // loop para localizar a mesa em questão e verificar o horário
    const temReserva = this.list_revervas.find((reserva) => {
      if (reserva.mesa === mesa) {
        const horario_entrada__loop = new Date(reserva.horario_entrada);
        const tempo_loop = this.parseTempo(reserva.tempo);
        const horario_saida_loop = new Date(
          horario_entrada__loop.getTime() + tempo_loop,
        );

        return (
          (horario_entrada_request >= horario_entrada__loop &&
            horario_entrada_request < horario_saida_loop) ||
          (horario_saida_request > horario_entrada__loop &&
            horario_saida_request <= horario_saida_loop)
        );
      }
    });

    return temReserva;
  }
  parseTempo(tempo: string): number {
    const partesTempo = tempo.split(':');
    const horas = parseInt(partesTempo[0], 10);
    const minutos = parseInt(partesTempo[1], 10);

    return (horas * 60 + minutos) * 60 * 1000;
  }
}
