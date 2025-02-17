import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Fornecedor } from "../../entities/fornecedor.entity";
import { FornecedorController } from "./fornecedor.controller";
import { FornecedorService } from "./fornecedor.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([Fornecedor]),
  ],
  providers: [FornecedorService],
  controllers: [FornecedorController],
})
export class FornecedorModule {}
