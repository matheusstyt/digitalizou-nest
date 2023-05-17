import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist';

@Injectable()
export class DBConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}
  createTypeOrmOptions(
    connectionName?: string,
  ): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    // sqlite
    return {
      type: 'sqlite',
      // host: this.configService.get<string>('HOST'),
      // port: this.configService.get<number>('PORT'),
      // username: this.configService.get<string>('USERNAME'),
      // password: this.configService.get<string>('PASSWORD'),
      database: this.configService.get<string>('DATABASE'),
      entities: [],
      synchronize: true,
    };
  }
}
