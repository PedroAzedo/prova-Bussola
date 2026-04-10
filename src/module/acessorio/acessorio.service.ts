import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../config/prisma.service';
import { CreateAcessorioDto } from './dto/create-acessorio.dto';
import { UpdateAcessorioDto } from './dto/update-acessorio.dto';

@Injectable()
export class AcessoriosService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateAcessorioDto) {
    return this.prisma.acessorio.create({ data: dto });
  }

  findAll() {
    return this.prisma.acessorio.findMany({ include: { veiculo: true } });
  }

  async findOne(id: number) {
    const a = await this.prisma.acessorio.findUnique({
      where: { id },
      include: { veiculo: true },
    });
    if (!a) throw new NotFoundException(`Acessório #${id} não encontrado`);
    return a;
  }

  async update(id: number, dto: UpdateAcessorioDto) {
    await this.findOne(id);
    return this.prisma.acessorio.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.acessorio.delete({ where: { id } });
  }
}
