import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { Alarme } from "./entities/alarme.entity";
import { Alimentacao } from "./entities/alimentacao.entity";
import { Comedouro } from "./entities/comedouro.entity";
import { Fornecedor } from "./entities/fornecedor.entity";
import { Pedido } from "./entities/pedido.entity";
import { Pet } from "./entities/pet.entity";
import { Produto } from "./entities/produto.entity";
import { ProdutoFornecedor } from "./entities/produto_fornecedor.entity";
import { Usuario } from "./entities/usuario.entity";
import { AlarmeModule } from "./modules/alarme/alarme.module";
import { AlimentacaoModule } from "./modules/alimentacao/alimentacao.module";
import { ComedouroModule } from "./modules/comedouro/comedouro.module";
import { FornecedorModule } from "./modules/fornecedor/fornecedor.module";
import { PedidoModule } from "./modules/pedido/pedido.module";
import { PetModule } from "./modules/pet/pet.module";
import { ProdutoModule } from "./modules/produto/produto.module";
import { ProdutoFornecedorModule } from "./modules/produto_fornecedor/produto_fornecedor.module";
import { UsuarioModule } from "./modules/usuario/usuario.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "aws-0-sa-east-1.pooler.supabase.com",
      port: 6543,
      username: "postgres.emubutxtgghgqhmsacqh",
      password: "Comedouro123456@",
      database: "postgres",
      entities: [
        Alarme,
        Alimentacao,
        Comedouro,
        Fornecedor,
        Pedido,
        Pet,
        Produto,
        ProdutoFornecedor,
        Usuario,
      ],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([
      Alarme,
      Alimentacao,
      Comedouro,
      Fornecedor,
      Pedido,
      Pet,
      Produto,
      ProdutoFornecedor,
      Usuario,
    ]),
    AlarmeModule,
    AlimentacaoModule,
    ComedouroModule,
    FornecedorModule,
    PedidoModule,
    PetModule,
    ProdutoModule,
    ProdutoFornecedorModule,
    UsuarioModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
