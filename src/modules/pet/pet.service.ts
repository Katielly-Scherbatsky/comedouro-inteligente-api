import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from '../../entities/pet.entity';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet)
    private petRepository: Repository<Pet>,
  ) {}

  findAll(): Promise<Pet[]> {
    return this.petRepository.find();
  }

  create(pet: Pet): Promise<Pet> {
    return this.petRepository.save(pet);
  }
}
