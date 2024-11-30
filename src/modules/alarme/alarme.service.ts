import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alarme } from '../../entities/alarme.entity';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class AlarmeService {
  constructor(
    @InjectRepository(Alarme)
    private readonly alarmeRepository: Repository<Alarme>,
  ) {}
    
  private readonly alarmeData = {
    tipoAlarme: 'servo',
    status: 'ativado',
    horario: new Date(),
  }  

  // Retorna todos os registros de alarmes
  async findAll(): Promise<Alarme[]> {
    return this.alarmeRepository.find();
  }

  @Cron(CronExpression.EVERY_30_SECONDS) // Defina o intervalo desejado
  async handleCron() {
    // Verificar se há novos dados JSON para salvar
    console.log('Executando tarefa agendada...');
    await this.alarmeRepository.create(this.alarmeData);
    console.log('Dados salvos no banco:', this.alarmeData);
  }

  // Cria um novo registro de alarme
  async create(alarmeData: Partial<Alarme>): Promise<Alarme> {
    const alarme = this.alarmeRepository.create(alarmeData);
    return this.alarmeRepository.save(alarme);
  }
}
