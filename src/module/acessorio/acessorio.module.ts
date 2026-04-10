import { Module } from '@nestjs/common';
import { AcessoriosController } from './acessorio.controller';
import { AcessoriosService } from './acessorio.service';

@Module({ controllers: [AcessoriosController], providers: [AcessoriosService] })
export class AcessoriosModule {}
