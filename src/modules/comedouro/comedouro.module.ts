import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComedouroService } from './comedouro.service';
import { ComedouroController } from './comedouro.controller';
import { Comedouro } from '../../entities/comedouro.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Comedouro]), // Registra o repositório de Comedouro no módulo
  ],
  providers: [ComedouroService],
  controllers: [ComedouroController],
})
export class ComedouroModule {}
