import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdutoFornecedor } from '../../entities/produto_fornecedor.entity';
import { ProdutoFornecedorService } from './produto_fornecedor.service';

@Controller('produto_fornecedor')
export class ProdutoFornecedorController {
  constructor(private readonly produtoFornecedorService: ProdutoFornecedorService) {}

  @Get()
  findAll(): Promise<ProdutoFornecedor[]> {
    return this.produtoFornecedorService.findAll();
  }

  @Post()
  create(@Body() produtoFornecedor: ProdutoFornecedor): Promise<ProdutoFornecedor> {
    return this.produtoFornecedorService.create(produtoFornecedor);
  }
}
