import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fornecedor } from '../../entities/fornecedor.entity';

@Injectable()
export class FornecedorService {
  constructor(
    @InjectRepository(Fornecedor)
    private fornecedorRepository: Repository<Fornecedor>,
  ) {}

  findAll(): Promise<Fornecedor[]> {
    return this.fornecedorRepository.find();
  }

  create(fornecedor: Fornecedor): Promise<Fornecedor> {
    return this.fornecedorRepository.save(fornecedor);
  }
}
