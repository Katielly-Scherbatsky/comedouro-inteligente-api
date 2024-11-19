import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlarmeService } from './alarme.service';
import { AlarmeController } from './alarme.controller';
import { Alarme } from '../../entities/alarme.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Alarme]), // Registra o repositório de Alarme no módulo
  ],
  providers: [AlarmeService],
  controllers: [AlarmeController],
})
export class AlarmeModule {}
