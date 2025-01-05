import { Body, Controller, Get, Post } from '@nestjs/common';
import { Alarme } from '../../entities/alarme.entity';
import { AlarmeService } from './alarme.service';

@Controller('alarme')
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
