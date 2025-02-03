import { IsEmail, IsNotEmpty } from "class-validator";

export class criarUsuarioDto {
  @IsNotEmpty()
  nome: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
