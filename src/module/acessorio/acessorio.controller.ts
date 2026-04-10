import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  HttpCode,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AcessoriosService } from './acessorio.service';
import { CreateAcessorioDto } from './dto/create-acessorio.dto';
import { UpdateAcessorioDto } from './dto/update-acessorio.dto';

@ApiTags('acessorios')
@Controller('acessorios')
export class AcessoriosController {
  constructor(private readonly acessoriosService: AcessoriosService) {}

  @Post()
  create(@Body() dto: CreateAcessorioDto) {
    return this.acessoriosService.create(dto);
  }

  @Get()
  findAll() {
    return this.acessoriosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.acessoriosService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateAcessorioDto,
  ) {
    return this.acessoriosService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.acessoriosService.remove(id);
  }
}
