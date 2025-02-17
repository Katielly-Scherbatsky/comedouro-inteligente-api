import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProdutoFornecedor } from "../../entities/produto_fornecedor.entity";
import { ProdutoFornecedorController } from "./produto_fornecedor.controller";
import { ProdutoFornecedorService } from "./produto_fornecedor.service";

@Module({
  imports: [TypeOrmModule.forFeature([ProdutoFornecedor])],
  providers: [ProdutoFornecedorService],
  controllers: [ProdutoFornecedorController],
})
export class ProdutoFornecedorModule {}
