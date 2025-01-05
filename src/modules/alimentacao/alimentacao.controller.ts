import { Body, Controller, Get, Post } from '@nestjs/common';
import { Alimentacao } from '../../entities/alimentacao.entity';
import { AlimentacaoService } from './alimentacao.service';

@Controller('alimentacao')
export class AlimentacaoController {
  constructor(private readonly alimentacaoService: AlimentacaoService) {}

  @Get()
  findAll(): Promise<Alimentacao[]> {
    return this.alimentacaoService.findAll();
  }

  @Post()
  create(@Body() alimentacao: Alimentacao): Promise<Alimentacao> {
    return this.alimentacaoService.create(alimentacao);
  }
}
