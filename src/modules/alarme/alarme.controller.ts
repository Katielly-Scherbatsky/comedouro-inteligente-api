import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "../../auth/auth.guard";
import { Alarme } from "../../entities/alarme.entity";
import { criarAlarmeDto, editarAlarmeDto, listarAlarmeDto } from "./alarme.dto";
import { AlarmeService } from "./alarme.service";

@UseGuards(AuthGuard)
@Controller("alarme")
export class AlarmeController {
  constructor(private readonly alarmeService: AlarmeService) {}

  @Get("/listar")
  findAll(payload: listarAlarmeDto, @Request() req): Promise<Alarme[]> {
    return this.alarmeService.findAll(payload, req.user.sub);
  }

  @Post("/inserir")
  create(@Body() payload: criarAlarmeDto): Promise<Alarme> {
    return this.alarmeService.create(payload);
  }

  @Put("/editar/:id")
  async editar(
    @Param("id") id: number,
    @Body() payload: editarAlarmeDto
  ): Promise<Alarme> {
    return this.alarmeService.editar(id, { ...payload });
  }

  @Delete("/excluir/:id")
  async excluir(@Param("id") id: number, @Request() req): Promise<void> {
    return this.alarmeService.excluir(id, req.user.sub);
  }
}
