import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
@Injectable()
export class PrismaService extends PrismaClient
 implements OnModuleInit, OnModuleDestroy {
 async onModuleInit() { await this.$connect(); }
 async onModuleDestroy() { await this.$disconnect(); }
}
CRIAR src/config/prisma.module.ts
import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';
@Global()
@Module({ providers: [PrismaService], exports: [PrismaService] })
export class PrismaModule {}