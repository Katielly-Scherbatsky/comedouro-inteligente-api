import { Controller, Get, Post, Body } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { Dashboard } from '../../entities/dashboard.entity';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  findAll(): Promise<Dashboard[]> {
    return this.dashboardService.findAll();
  }

  @Post()
  create(@Body() dashboard: Dashboard): Promise<Dashboard> {
    return this.dashboardService.create(dashboard);
  }
}
