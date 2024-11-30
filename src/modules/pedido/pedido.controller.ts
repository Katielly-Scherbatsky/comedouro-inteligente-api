import { Controller, Get, Post, Body } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { Pedido } from '../../entities/pedido.entity';

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
