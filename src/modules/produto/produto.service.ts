import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from '../../entities/produto.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
  ) {}

  findAll(): Promise<Produto[]> {
    return this.produtoRepository.find();
  }

  create(produto: Produto): Promise<Produto> {
    return this.produtoRepository.save(produto);
  }
}
