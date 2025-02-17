import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Pet } from "../../entities/pet.entity";
import { criarPetDto, editarPetDto, listarPetDto } from "./pet.dto";

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

  async editar(id: number, payload: editarPetDto): Promise<Pet> {
    await this.petRepository.update(id, payload);
    return this.petRepository.findOneBy({ id });
  }

  async excluir(id: number, usuarioId: number): Promise<void> {
    // Verifica se o pet pertence ao usuário antes de excluir
    const pet = await this.petRepository.findOneBy({ id, usuarioId });
    if (!pet) {
      throw new Error(
        "Pet não encontrado ou você não tem permissão para excluí-lo."
      );
    }
    await this.petRepository.delete(id);
  }
}
