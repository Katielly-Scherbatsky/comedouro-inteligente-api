import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class criarPedidoDto {
  @IsNotEmpty()
  @IsString()
  data: string;

  @IsString()
  @IsOptional()
  status: string;

  @IsNumber()
  @IsOptional()
  produtoId: number;

  @IsNotEmpty()
  @IsNumber()
  preco: number;

  @IsNumber()
  @IsOptional()
  fornecedorId: number;

  @IsNumber()
  @IsOptional()
  usuarioId: number;
}

export class listarPedidoDto {
  @IsOptional()
  @IsString()
  data?: string;

  @IsString()
  @IsOptional()
  status?: string;

  @IsNumber()
  @IsOptional()
  produtoId?: number;

  @IsNotEmpty()
  @IsNumber()
  preco?: number;

  @IsNumber()
  @IsOptional()
  fornecedorId?: number;

  @IsNumber()
  @IsOptional()
  usuarioId?: number;
}
