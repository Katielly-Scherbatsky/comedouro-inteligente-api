import { Controller, Get, Post, Body } from '@nestjs/common';
import { ComedouroService } from './comedouro.service';
import { Comedouro } from '../../entities/comedouro.entity';

@Controller('comedouro')
export class ComedouroController {
  constructor(private readonly comedouroService: ComedouroService) {}

  @Get()
  findAll(): Promise<Comedouro[]> {
    return this.comedouroService.findAll();
  }

  @Post()
  create(@Body() comedouro: Comedouro): Promise<Comedouro> {
    return this.comedouroService.create(comedouro);
  }
}
