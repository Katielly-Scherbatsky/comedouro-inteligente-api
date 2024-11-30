import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetService } from './pet.service';
import { PetController } from './pet.controller';
import { Pet } from '../../entities/pet.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pet]), // Registra o repositório de Pet no módulo
  ],
  providers: [PetService],
  controllers: [PetController],
})
export class PetModule {}
