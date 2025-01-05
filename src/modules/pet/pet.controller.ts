import { Controller, Get, Post, Body } from '@nestjs/common';
import { PetService } from './pet.service';
import { Pet } from '../../entities/pet.entity';

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Get('/listar')
  findAll(): Promise<Pet[]> {
    return this.petService.findAll();
  }

  @Post('/inserir')
  create(@Body() pet: Pet): Promise<Pet> {
    return this.petService.create(pet);
  }
}
