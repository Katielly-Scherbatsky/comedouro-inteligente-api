import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Alarme } from './entities/alarme.entity';
import { Alimentacao } from './entities/alimentacao.entity';
import { Comedouro } from './entities/comedouro.entity';
import { Pedido } from './entities/pedido.entity';
import { Pet } from './entities/pet.entity';
import { Produto } from './entities/produto.entity';
import { AlarmeModule } from './modules/alarme/alarme.module';
import { AlimentacaoModule } from './modules/alimentacao/alimentacao.module';
import { ComedouroModule } from './modules/comedouro/comedouro.module';
import { PedidoModule } from './modules/pedido/pedido.module';
import { PetModule } from './modules/pet/pet.module';
import { ProdutoModule } from './modules/produto/produto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'aws-0-sa-east-1.pooler.supabase.com',
      port: 6543,
      username: 'postgres.emubutxtgghgqhmsacqh',
      password: 'Comedouro123456@',
      database: 'postgres',
      entities: [Pet, Alarme, Alimentacao, Comedouro, Produto, Pedido],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Pet, Alarme, Alimentacao, Comedouro, Produto, Pedido]),
    PetModule,
    AlarmeModule,
    AlimentacaoModule,
    ComedouroModule,
    ProdutoModule,
    PedidoModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
