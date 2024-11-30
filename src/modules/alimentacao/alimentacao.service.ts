import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alimentacao } from '../../entities/alimentacao.entity';

@Injectable()
export class AlimentacaoService {
  constructor(
    @InjectRepository(Alimentacao)
    private alimentacaoRepository: Repository<Alimentacao>,
  ) {}

  findAll(): Promise<Alimentacao[]> {
    return this.alimentacaoRepository.find();
  }

  create(alimentacao: Alimentacao): Promise<Alimentacao> {
    return this.alimentacaoRepository.save(alimentacao);
  }
}
