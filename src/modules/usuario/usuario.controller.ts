import { Body, Controller, Get, Post } from "@nestjs/common";
import { Usuario } from "../../entities/usuario.entity";
import { UsuarioService } from "./usuario.service";
import { criarUsuarioDto } from "./usuario.dto";

@Controller("usuario")
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  findAll(): Promise<Usuario[]> {
    return this.usuarioService.findAll();
  }

  @Post("/inserir")
  create(@Body() payload: criarUsuarioDto): Promise<Usuario> {
    return this.usuarioService.create(payload);
  }
}
