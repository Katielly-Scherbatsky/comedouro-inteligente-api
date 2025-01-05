import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alimentacao } from '../../entities/alimentacao.entity';
import { AlimentacaoController } from './alimentacao.controller';
import { AlimentacaoService } from './alimentacao.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Alimentacao]), // Registra o repositório de Alimentacao no módulo
  ],
  providers: [AlimentacaoService],
  controllers: [AlimentacaoController],
})
export class AlimentacaoModule {}
