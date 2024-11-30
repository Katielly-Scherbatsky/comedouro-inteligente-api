import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { Dashboard } from '../../entities/dashboard.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Dashboard]), // Registra o repositório de Dashboard no módulo
  ],
  providers: [DashboardService],
  controllers: [DashboardController],
})
export class DashboardModule {}
