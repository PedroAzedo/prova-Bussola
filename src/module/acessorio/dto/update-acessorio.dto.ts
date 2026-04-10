import { PartialType } from '@nestjs/swagger';
import { CreateAcessorioDto } from './create-acessorio.dto';

export class UpdateAcessorioDto extends PartialType(CreateAcessorioDto) {}
