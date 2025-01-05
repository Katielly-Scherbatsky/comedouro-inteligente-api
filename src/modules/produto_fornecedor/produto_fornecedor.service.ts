import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProdutoFornecedor } from '../../entities/produto_fornecedor.entity';

@Injectable()
export class ProdutoFornecedorService {
  constructor(
    @InjectRepository(ProdutoFornecedor)
    private produtoFornecedorRepository: Repository<ProdutoFornecedor>,
  ) {}

  findAll(): Promise<ProdutoFornecedor[]> {
    return this.produtoFornecedorRepository.find();
  }

  create(produtoFornecedor: ProdutoFornecedor): Promise<ProdutoFornecedor> {
    return this.produtoFornecedorRepository.save(produtoFornecedor);
  }
}
