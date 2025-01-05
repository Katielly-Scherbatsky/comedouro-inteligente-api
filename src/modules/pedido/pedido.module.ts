import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from '../../entities/pedido.entity';
import { PedidoController } from './pedido.controller';
import { PedidoService } from './pedido.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pedido]), // Registra o repositório de Pedido no módulo
  ],
  providers: [PedidoService],
  controllers: [PedidoController],
})
export class PedidoModule {}
