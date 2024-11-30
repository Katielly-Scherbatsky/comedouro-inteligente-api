import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { Pedido } from '../../entities/pedido.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pedido]), // Registra o repositório de Pedido no módulo
  ],
  providers: [PedidoService],
  controllers: [PedidoController],
})
export class PedidoModule {}
