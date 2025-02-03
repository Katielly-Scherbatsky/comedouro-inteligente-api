import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname } from "path";
import { AuthGuard } from "../../auth/auth.guard";
import { Pet } from "../../entities/pet.entity";
import { criarPetDto, listarPetDto } from "./pet.dto";
import { PetService } from "./pet.service";
import { Express } from "express";

@UseGuards(AuthGuard)
@Controller("pet")
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Get("/listar")
  findAll(payload: listarPetDto, @Request() req): Promise<Pet[]> {
    return this.petService.findAll(payload, req.user.sub);
  }

  @Post("/inserir")
  @UseInterceptors(
    FileInterceptor("foto", {
      storage: diskStorage({
        destination: "./uploads", // Pasta onde as imagens serão salvas
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + "-" + Math.round(Math.random() * 1e9);
          callback(null, uniqueSuffix + extname(file.originalname));
        },
      }),
    })
  )
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() payload: criarPetDto
  ): Promise<Pet> {
    const imageUrl = file ? `/uploads/${file.filename}` : null;
    return this.petService.create({ ...payload, foto: imageUrl });
  }
}
