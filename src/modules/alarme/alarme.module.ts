import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alarme } from '../../entities/alarme.entity';
import { AlarmeController } from './alarme.controller';
import { AlarmeService } from './alarme.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Alarme]),
  ],
  providers: [AlarmeService],
  controllers: [AlarmeController],
})
export class AlarmeModule {}
