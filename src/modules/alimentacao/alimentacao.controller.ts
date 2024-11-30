import { Controller, Get, Post, Body } from '@nestjs/common';
import { AlimentacaoService } from './alimentacao.service';
import { Alimentacao } from '../../entities/alimentacao.entity';

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
