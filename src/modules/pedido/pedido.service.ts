import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Pedido } from "../../entities/pedido.entity";
import { listarPedidoDto } from "./pedido.dto";

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private pedidoRepository: Repository<Pedido>
  ) {}

  findAll(payload: listarPedidoDto, usuarioId: number): Promise<Pedido[]> {
    return this.pedidoRepository.find();
  }

  create(pedido: Pedido): Promise<Pedido> {
    return this.pedidoRepository.save(pedido);
  }
}
