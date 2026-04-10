import { IsString, IsInt } from 'class-validator';

export class CreateAcessorioDto {
  @IsString() nome!: string;
  @IsInt() veiculoId!: number;
}
