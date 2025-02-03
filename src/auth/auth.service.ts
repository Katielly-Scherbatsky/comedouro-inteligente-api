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

  // async login(email, senha) {
  //   const usuario = await this.usuarioRepository.findOneBy({
  //     email: email,
  //   });

  //   if (!usuario) {
  //     throw new Error("Usuário ou senha inválida");
  //   }

  //   const senhaValida = await criptografia.comparar(senha, usuario.senha);

  //   if (!senhaValida) {
  //     throw new Error("Usuário ou senha inválida");
  //   }

  //   const token = jwt.sign(
  //     {
  //       sub: usuario.id,
  //       email: usuario.email,
  //     },
  //     process.env.JWT_SECRET,
  //     {
  //       expiresIn: process.env.JWT_EXPIRES_IN,
  //     }
  //   );

  //   return {
  //     usuario: {
  //       id: usuario.id,
  //       nome: usuario.nome,
  //       email: usuario.email,
  //     },
  //     token,
  //   };
  // }

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
