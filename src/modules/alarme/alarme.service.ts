import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Alarme } from "../../entities/alarme.entity";
import { criarAlarmeDto, editarAlarmeDto, listarAlarmeDto } from "./alarme.dto";

@Injectable()
export class AlarmeService {
  constructor(
    @InjectRepository(Alarme)
    private alarmeRepository: Repository<Alarme>
  ) {}

  findAll(payload: listarAlarmeDto, usuarioId: number): Promise<Alarme[]> {
    return this.alarmeRepository.find({
      where: {
        usuarioId,
        nome: payload?.nome,
      },
      relations: ["comedouro"],
    });
  }

  create(payload: criarAlarmeDto): Promise<Alarme> {
    return this.alarmeRepository.save(payload);
  }

  async editar(id: number, payload: editarAlarmeDto): Promise<Alarme> {
    await this.alarmeRepository.update(id, payload);
    return this.alarmeRepository.findOneBy({ id });
  }

  async excluir(id: number, usuarioId: number): Promise<void> {
    const pet = await this.alarmeRepository.findOneBy({ id, usuarioId });
    if (!pet) {
      throw new Error(
        "Alarme não encontrado ou você não tem permissão para excluí-lo."
      );
    }
    await this.alarmeRepository.delete(id);
  }
}
