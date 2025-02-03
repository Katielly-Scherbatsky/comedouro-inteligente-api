import { Body, Controller, Get, Post, Request } from "@nestjs/common";
import { Alarme } from "../../entities/alarme.entity";
import { listarAlarmeDto } from "./alarme.dto";
import { AlarmeService } from "./alarme.service";

@Controller("alarme")
export class AlarmeController {
  constructor(private readonly alarmeService: AlarmeService) {}

  @Get("/listar")
  findAll(payload: listarAlarmeDto, @Request() req): Promise<Alarme[]> {
    return this.alarmeService.findAll(payload, req.user.sub);
  }

  @Post("/inserir")
  create(@Body() alarme: Alarme): Promise<Alarme> {
    return this.alarmeService.create(alarme);
  }
}
