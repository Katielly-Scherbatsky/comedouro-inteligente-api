import { Body, Controller, Get, Post } from '@nestjs/common';
import { Fornecedor } from '../../entities/fornecedor.entity';
import { FornecedorService } from './fornecedor.service';

@Controller('fornecedor')
export class FornecedorController {
  constructor(private readonly fornecedorService: FornecedorService) {}

  @Get()
  findAll(): Promise<Fornecedor[]> {
    return this.fornecedorService.findAll();
  }

  @Post()
  create(@Body() fornecedor: Fornecedor): Promise<Fornecedor> {
    return this.fornecedorService.create(fornecedor);
  }
}
