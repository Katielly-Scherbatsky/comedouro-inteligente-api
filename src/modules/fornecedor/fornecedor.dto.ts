import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class criarFornecedorDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsString()
  @IsOptional()
  endereco: string;

  @IsString()
  @IsOptional()
  tempoEntrega: string;

  @IsNumber()
  @IsOptional()
  usuarioId: number;
}

export class listarFornecedorDto {
  @IsOptional()
  @IsString()
  nome?: string;

  @IsString()
  @IsOptional()
  endereco?: string;

  @IsString()
  @IsOptional()
  tempoEntrega?: string;

  @IsNumber()
  @IsOptional()
  usuarioId?: number;
}
