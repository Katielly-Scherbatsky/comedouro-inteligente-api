import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetService } from './usuario.service';
import { PetController } from './usuario.controller';
import { Pet } from '../../entities/pet.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pet]), // Registra o repositório de Pet no módulo
  ],
  providers: [PetService],
  controllers: [PetController],
})
export class PetModule {}
