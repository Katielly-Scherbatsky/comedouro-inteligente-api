import { Controller, Get, Post, Body } from '@nestjs/common';
import { AlarmeService } from './alarme.service';
import { Alarme } from '../../entities/alarme.entity';

@Controller('alarmes')
export class AlarmeController {
  constructor(private readonly alarmeService: AlarmeService) {}

  @Get()
  findAll(): Promise<Alarme[]> {
    return this.alarmeService.findAll();
  }

  @Post()
  create(@Body() alarme: Alarme): Promise<Alarme> {
    return this.alarmeService.create(alarme);
  }
}
