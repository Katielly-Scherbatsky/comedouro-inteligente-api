import { Module } from '@nestjs/common';
import { SerialService } from './serial.service';
import { AlarmeService } from '../alarme/alarme.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alarme } from '../../entities/alarme.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Alarme])],
  providers: [SerialService, AlarmeService],
  exports: [SerialService],
})
export class SerialModule {}
