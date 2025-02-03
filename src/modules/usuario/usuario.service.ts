import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Usuario } from "../../entities/usuario.entity";
import { criarUsuarioDto } from "./usuario.dto";

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>
  ) {}

  async findByNome(nome: string): Promise<Usuario> {
    return this.usuarioRepository.findOne({ where: { nome } });
  }

  async findByEmail(email: string): Promise<Usuario> {
    return this.usuarioRepository.findOne({ where: { email } });
  }

  findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  create(payload: criarUsuarioDto): Promise<Usuario> {
    return this.usuarioRepository.save(payload);
  }
}
