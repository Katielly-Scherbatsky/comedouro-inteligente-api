import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Alarme } from "../../entities/alarme.entity";
import { criarAlarmeDto, listarAlarmeDto } from "./alarme.dto";

@Injectable()
export class AlarmeService {
  constructor(
    @InjectRepository(Alarme)
    private alarmeRepository: Repository<Alarme>
  ) {}

  findAll(payload: listarAlarmeDto): Promise<Alarme[]> {
    return this.alarmeRepository.find({
      where: {
        usuarioId: payload.usuarioId,
      },
    });
  }

  create(payload: criarAlarmeDto): Promise<Alarme> {
    return this.alarmeRepository.save(payload);
  }
}
