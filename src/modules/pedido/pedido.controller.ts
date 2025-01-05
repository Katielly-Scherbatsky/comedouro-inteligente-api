import { Body, Controller, Get, Post } from '@nestjs/common';
import { Pedido } from '../../entities/pedido.entity';
import { PedidoService } from './pedido.service';

@Controller('pedido')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Get()
  findAll(): Promise<Pedido[]> {
    return this.pedidoService.findAll();
  }

  @Post()
  create(@Body() pedido: Pedido): Promise<Pedido> {
    return this.pedidoService.create(pedido);
  }
}
