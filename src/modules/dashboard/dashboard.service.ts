import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dashboard } from '../../entities/dashboard.entity';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(Dashboard)
    private dashboardRepository: Repository<Dashboard>,
  ) {}

  findAll(): Promise<Dashboard[]> {
    return this.dashboardRepository.find();
  }

  create(dashboard: Dashboard): Promise<Dashboard> {
    return this.dashboardRepository.save(dashboard);
  }
}
