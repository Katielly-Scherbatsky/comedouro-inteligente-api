import { Body, Controller, Get, Post } from '@nestjs/common';
import { Comedouro } from '../../entities/comedouro.entity';
import { ComedouroService } from './comedouro.service';

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
