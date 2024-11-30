import { Controller, Get, Post, Body } from '@nestjs/common';
import { PetService } from './pet.service';
import { Pet } from '../../entities/pet.entity';

@Controller('pets')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Get()
  findAll(): Promise<Pet[]> {
    return this.petService.findAll();
  }

  @Post()
  create(@Body() pet: Pet): Promise<Pet> {
    return this.petService.create(pet);
  }
}
