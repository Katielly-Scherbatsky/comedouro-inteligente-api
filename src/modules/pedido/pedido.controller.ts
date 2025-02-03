import { Body, Controller, Get, Post, Request } from "@nestjs/common";
import { Pedido } from "../../entities/pedido.entity";
import { PedidoService } from "./pedido.service";
import { listarPedidoDto } from "./pedido.dto";

@Controller("pedido")
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Get("/listar")
  findAll(payload: listarPedidoDto, @Request() req): Promise<Pedido[]> {
    return this.pedidoService.findAll(payload, req.user.sub);
  }

  @Post("/inserir")
  create(@Body() pedido: Pedido): Promise<Pedido> {
    return this.pedidoService.create(pedido);
  }
}
