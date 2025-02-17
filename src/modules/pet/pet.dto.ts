import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

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

  @IsNumber()
  @IsOptional()
  tipo: number;
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

export class editarPetDto {
  @IsOptional()
  @IsString()
  nome?: string;

  @IsOptional()
  @IsString()
  raca?: string;

  @IsOptional()
  @IsNumber()
  idade?: number;

  @IsNumber()
  @IsOptional()
  peso: number;

  @IsNumber()
  @IsOptional()
  tipo: number;

  @IsNotEmpty()
  @IsNumber()
  usuarioId: number;
}
