import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../config/prisma.service';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';

@Injectable()
export class VeiculosService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateVeiculoDto) {
    return this.prisma.veiculo.create({ data: dto });
  }

  findAll() {
    return this.prisma.veiculo.findMany({ 
      include: { acessorios: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const v = await this.prisma.veiculo.findUnique({ 
      where: { id },
      include: { acessorios: true },
    });
    if (!v) throw new NotFoundException(`Veículo #${id} não encontrado`);
    return v;
  }

  async update(id: number, dto: UpdateVeiculoDto) {
    await this.findOne(id);
    return this.prisma.veiculo.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.veiculo.delete({ where: { id } });
  }
}
