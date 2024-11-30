import { Injectable } from '@nestjs/common';
import { AlarmeService } from './modules/alarme/alarme.service';
// import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class AlarmeCronService {

  constructor(private readonly alarmeService: AlarmeService) {}

  async processRfidData(rfidData: string) {
    console.log('Dados RFID recebidos:', rfidData);

    // Exemplo de validação de dados RFID
    if (!rfidData) {
      console.warn('Dados RFID inválidos');
      return;
    }

    // Dados que serão salvos
    const alarmeData = {
      tipoAlarme: 'servo',
      status: 'ativado',
      horario: new Date(),
    };

    // Salvar os dados no banco
    await this.alarmeService.create(alarmeData);
    console.log('Dados salvos no banco:', alarmeData);
  }

  // @Cron(CronExpression.EVERY_10_SECONDS) // Defina o intervalo desejado
  // async handleRfidEvent(rfidData: string) {
  //   console.log('RFID recebido:', rfidData);

  //   // Criação dos dados do alarme
  //   const alarmeData = {
  //     tipoAlarme: 'servo',
  //     status: 'ativado',
  //     horario: new Date(),
  //   };

  //   // Salvar os dados no banco
  //   await this.alarmeService.create(alarmeData);
  //   console.log('Dados salvos no banco:', alarmeData);
  // }
}
