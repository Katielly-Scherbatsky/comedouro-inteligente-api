import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class criarPetDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsString()
  @IsOptional()
  raca: string;

  @IsNumber()
  @IsOptional()
  idade: number;

  @IsNotEmpty()
  @IsNumber()
  usuarioId: number;

  @IsNumber()
  @IsOptional()
  peso: number;

  foto: string;
}

export class listarPetDto {
  @IsOptional()
  @IsString()
  nome?: string;

  @IsOptional()
  @IsString()
  raca?: string;

  @IsOptional()
  @IsNumber()
  idade?: number;
}
