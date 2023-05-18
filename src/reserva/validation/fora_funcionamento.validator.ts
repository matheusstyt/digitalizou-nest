import {
  ValidatorConstraintInterface,
  ValidatorConstraint,
  ValidationArguments,
  ValidationOptions,
  registerDecorator,
} from 'class-validator';
import ReservaRepository from '../reserva.repository';
import { Inject } from '@nestjs/common';
import { ReservaServices } from '../reserva.services';
@ValidatorConstraint({ async: true })
export class ForaFuncionamentoValidator
  implements ValidatorConstraintInterface
{
  constructor(
    @Inject(ReservaRepository)
    private readonly reservaRepository: ReservaRepository,
    private readonly reservaServices: ReservaServices,
  ) {}
  async validate(value: any): Promise<boolean> {
    const isValid = this.reservaServices.isValid(value);
    console.log(isValid);
    return !isValid;
  }
}
export const HorarioPermitido = (optionValidation: ValidationOptions) => {
  return (objeto: object, propriedade: string) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: propriedade,
      options: optionValidation,
      constraints: [],
      validator: ForaFuncionamentoValidator,
    });
  };
};
