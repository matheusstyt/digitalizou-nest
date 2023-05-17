import {
  ValidatorConstraintInterface,
  ValidatorConstraint,
  ValidationArguments,
  ValidationOptions,
  registerDecorator,
} from 'class-validator';
import ReservaRepository from '../reserva.repository';
import { Inject } from '@nestjs/common';
@ValidatorConstraint({ async: true })
export class UniqueHorarioValidator implements ValidatorConstraintInterface {
  constructor(
    @Inject(ReservaRepository)
    private readonly reservaRepository: ReservaRepository,
  ) {}
  async validate(value: any, args: ValidationArguments): Promise<boolean> {
    const tempo = args.object['tempo'];
    const mesa = args.object['mesa'];
    const isExists = this.reservaRepository.isExists(value, tempo, mesa);

    return !isExists;
  }
}
export const VerificarHorario = (optionValidation: ValidationOptions) => {
  return (objeto: object, propriedade: string) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: propriedade,
      options: optionValidation,
      constraints: [],
      validator: UniqueHorarioValidator,
    });
  };
};
