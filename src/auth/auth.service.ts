import { InjectRepository } from "@nestjs/typeorm";
import { Usuario } from "../entities/usuario.entity.js";
import { Repository } from "typeorm";
import { JwtService } from "@nestjs/jwt";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsuarioService } from "../modules/usuario/usuario.service.js";

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService
  ) {}

  async login(
    email: string,
    senha: string
  ): Promise<{ usuario: Usuario; access_token: string }> {
    const usuario = await this.usuarioService.findByEmail(email);

    if (usuario?.senha !== senha) {
      throw new UnauthorizedException();
    }

    const payload = { sub: usuario.id, nome: usuario.nome };

    return {
      usuario: usuario,
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
