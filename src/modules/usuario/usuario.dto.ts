import { IsEmail, IsNotEmpty } from "class-validator";

export class criarUsuarioDto {
  @IsNotEmpty()
  nome: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  senha: string;
}

export class editarUsuarioDto {
  @IsNotEmpty()
  nome: string;

  @IsEmail()
  email: string;
}
