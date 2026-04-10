import { IsString, IsInt, Min } from 'class-validator';

export class CreateVeiculoDto {
  @IsString() modelo!: string;
  @IsInt() @Min(1800) anoFabricacao!: number;
  @IsString() placa!: string;
}
