import { Controller, Post, Body } from '@nestjs/common';
import { AlarmeCronService } from './alarme_cron.service';

@Controller('alarme')
export class AlarmeController {
  constructor(private readonly alarmeCronService: AlarmeCronService) {}

  simulateRfidReading() {
    const rfidData = '08000AAAE941'; // Exemplo de RFID
    this.alarmeCronService.processRfidData(rfidData);
  }

  // @Post('receber-dados')
  // async receberDados() {
  //   this.alarmeCronService.handleCron(); // Passa os dados recebidos para o cron
  //   return { message: 'Dados recebidos e agendados.' };
  // }
}
