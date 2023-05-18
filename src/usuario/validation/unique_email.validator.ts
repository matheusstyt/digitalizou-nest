import {
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { UsuarioRepository } from '../usuario.repository';
import { Injectable } from '@nestjs/common';
import { UsuarioServices } from '../usuario.services';

@Injectable()
@ValidatorConstraint({ async: true })
export class UniqueEmailValidator implements ValidatorConstraintInterface {
  constructor(private usuarioServices: UsuarioServices) {}

  async validate(value: any): Promise<boolean> {
    const isExists = await this.usuarioServices.isExists(value);
    return !isExists;
  }
}

export const UniqueEmail = (optionValidation: ValidationOptions) => {
  return (objeto: object, propriedade: string) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: propriedade,
      options: optionValidation,
      constraints: [],
      validator: UniqueEmailValidator,
    });
  };
};
