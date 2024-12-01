import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { SerialPort } from 'serialport';
import { AlarmeService } from '../alarme/alarme.service';

@Injectable()
export class SerialService implements OnModuleInit {
  private readonly logger = new Logger(SerialService.name);
  private port: SerialPort;
  private buffer = ''; // Buffer para armazenar dados recebidos da serial

  constructor(private readonly alarmeService: AlarmeService) {}

  onModuleInit() {
    this.port = new SerialPort({
      path: 'COM3', // Porta Serial do Arduino
      baudRate: 9600,
    });

    this.port.on('data', this.handleSerialData.bind(this));
    this.logger.log('Serial port initialized on COM3');
  }

  private async handleSerialData(data: Buffer) {
    const receivedData = data.toString().trim();
    this.logger.log(`Data received: ${receivedData}`);

    // Adiciona os dados recebidos ao buffer
    this.buffer += receivedData;

    // Tenta processar o buffer
    try {
      const jsonData = JSON.parse(this.buffer); // Tenta interpretar o buffer como JSON
      this.logger.log('Valid JSON received:', jsonData);

      // Salva no banco de dados usando o AlarmeService
      await this.alarmeService.create({
        tipoAlarme: jsonData.tipo,
        status: jsonData.status,
        horario: new Date(jsonData.horario),
      });

      this.logger.log('Alarme saved to database successfully.');

      // Limpa o buffer após processar
      this.buffer = '';
    } catch (error) {
      // Se o JSON estiver incompleto, espera mais dados
      if (error.message.includes('Unexpected') || error.message.includes('end of JSON')) {
        this.logger.warn('Incomplete JSON, waiting for more data...');
      } else {
        // Para outros erros, reseta o buffer para evitar acumular dados inválidos
        this.logger.error(`Error processing data: ${error.message}`);
        this.buffer = '';
      }
    }
  }
  
}
