import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Pet } from "../../entities/pet.entity";
import { criarPetDto, listarPetDto } from "./pet.dto";

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet)
    private petRepository: Repository<Pet>
  ) {}

  findAll(payload: listarPetDto, usuarioId: number): Promise<Pet[]> {
    return this.petRepository.find({
      where: {
        usuarioId,
        nome: payload?.nome,
        raca: payload?.raca,
        idade: payload?.idade,
      },
    });
  }

  create(payload: criarPetDto): Promise<Pet> {
    return this.petRepository.save(payload);
  }
}
