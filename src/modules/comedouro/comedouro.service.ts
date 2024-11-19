import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comedouro } from '../../entities/comedouro.entity';

@Injectable()
export class ComedouroService {
  constructor(
    @InjectRepository(Comedouro)
    private comededouroRepository: Repository<Comedouro>,
  ) {}

  findAll(): Promise<Comedouro[]> {
    return this.comededouroRepository.find();
  }

  create(comededouro: Comedouro): Promise<Comedouro> {
    return this.comededouroRepository.save(comededouro);
  }
}
