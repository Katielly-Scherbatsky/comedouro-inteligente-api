import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "../../auth/auth.guard";
import { Pet } from "../../entities/pet.entity";
import { criarPetDto, editarPetDto, listarPetDto } from "./pet.dto";
import { PetService } from "./pet.service";

@UseGuards(AuthGuard)
@Controller("pet")
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Get("/listar")
  findAll(payload: listarPetDto, @Request() req): Promise<Pet[]> {
    return this.petService.findAll(payload, req.user.sub);
  }

  @Post("/inserir")
  async create(@Body() payload: criarPetDto): Promise<Pet> {
    return this.petService.create({ ...payload });
  }

  @Put("/editar/:id")
  async editar(
    @Param("id") id: number,
    @Body() payload: editarPetDto
  ): Promise<Pet> {
    return this.petService.editar(id, { ...payload });
  }

  @Delete("/excluir/:id")
  async excluir(@Param("id") id: number, @Request() req): Promise<void> {
    return this.petService.excluir(id, req.user.sub);
  }
}
