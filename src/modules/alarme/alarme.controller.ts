import { Body, Controller, Get, Post, Request } from "@nestjs/common";
import { Alarme } from "../../entities/alarme.entity";
import { criarAlarmeDto, listarAlarmeDto } from "./alarme.dto";
import { AlarmeService } from "./alarme.service";

@Controller("alarme")
export class AlarmeController {
  constructor(private readonly alarmeService: AlarmeService) {}

  @Get("/listar")
  findAll(payload: listarAlarmeDto): Promise<Alarme[]> {
    return this.alarmeService.findAll(payload);
  }

  @Post("/inserir")
  create(@Body() payload: criarAlarmeDto): Promise<Alarme> {
    return this.alarmeService.create(payload);
  }
}
