import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { Usuario } from "../../entities/usuario.entity";
import { criarUsuarioDto, editarUsuarioDto } from "./usuario.dto";
import { UsuarioService } from "./usuario.service";

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

  @Put("/editar/:id")
  async editar(
    @Param("id") id: number,
    @Body() payload: editarUsuarioDto
  ): Promise<Usuario> {
    return this.usuarioService.editar(id, { ...payload });
  }
}
