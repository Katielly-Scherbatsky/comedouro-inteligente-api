import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Alarme } from "../../entities/alarme.entity";
import { listarAlarmeDto } from "./alarme.dto";

@Injectable()
export class AlarmeService {
  constructor(
    @InjectRepository(Alarme)
    private alarmeRepository: Repository<Alarme>
  ) {}

  findAll(payload: listarAlarmeDto, usuarioId: number): Promise<Alarme[]> {
    return this.alarmeRepository.find();
  }

  create(alarme: Alarme): Promise<Alarme> {
    return this.alarmeRepository.save(alarme);
  }
}
