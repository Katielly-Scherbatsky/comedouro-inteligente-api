import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlimentacaoService } from './alimentacao.service';
import { AlimentacaoController } from './alimentacao.controller';
import { Alimentacao } from '../../entities/alimentacao.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Alimentacao]), // Registra o repositório de Alimentacao no módulo
  ],
  providers: [AlimentacaoService],
  controllers: [AlimentacaoController],
})
export class AlimentacaoModule {}
