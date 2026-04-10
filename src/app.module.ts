import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './config/prisma.module';
import { VeiculosModule } from './module/veiculos/veiculos.module';
import { AcessoriosModule } from './module/acessorio/acessorio.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    VeiculosModule,
    AcessoriosModule,
  ],
})
export class AppModule {}
