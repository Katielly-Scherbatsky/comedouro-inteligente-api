import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comedouro } from '../../entities/comedouro.entity';
import { ComedouroController } from './comedouro.controller';
import { ComedouroService } from './comedouro.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Comedouro]), // Registra o repositório de Comedouro no módulo
  ],
  providers: [ComedouroService],
  controllers: [ComedouroController],
})
export class ComedouroModule {}
