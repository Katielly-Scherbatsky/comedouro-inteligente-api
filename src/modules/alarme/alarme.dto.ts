import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class criarAlarmeDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsString()
  @IsOptional()
  tipoAlarme: string;

  @IsString()
  @IsOptional()
  data: string;

  @IsNumber()
  @IsOptional()
  status: number;

  @IsNotEmpty()
  @IsNumber()
  comedouroId: number;

  @IsNotEmpty()
  @IsNumber()
  usuarioId: number;
}

export class listarAlarmeDto {
  @IsNotEmpty()
  @IsString()
  nome?: string;

  @IsString()
  @IsOptional()
  tipoAlarme?: string;

  @IsString()
  @IsOptional()
  data?: string;

  @IsNumber()
  @IsOptional()
  status?: number;

  @IsNotEmpty()
  @IsNumber()
  comedouroId?: number;

  @IsNotEmpty()
  @IsNumber()
  usuarioId?: number;
}

export class editarAlarmeDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsString()
  @IsOptional()
  tipoAlarme: string;

  @IsString()
  @IsOptional()
  data: string;

  @IsNumber()
  @IsOptional()
  status: number;

  @IsNotEmpty()
  @IsNumber()
  comedouroId: number;

  @IsNotEmpty()
  @IsNumber()
  usuarioId: number;
}
