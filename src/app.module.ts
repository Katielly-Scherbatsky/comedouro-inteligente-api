import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Pet } from './entities/pet.entity';
import { PetModule } from './modules/pet/pet.module';
import { Alarme } from './entities/alarme.entity';
import { AlarmeModule } from './modules/alarme/alarme.module';
import { Alimentacao } from './entities/alimentacao.entity';
import { AlimentacaoModule } from './modules/alimentacao/alimentacao.module';
import { Comedouro } from './entities/comedouro.entity';
import { ComedouroModule } from './modules/comedouro/comedouro.module';
import { Dashboard } from './entities/dashboard.entity';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { Pedido } from './entities/pedido.entity';
import { PedidoModule } from './modules/pedido/pedido.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'aws-0-sa-east-1.pooler.supabase.com',
      port: 6543,
      username: 'postgres.emubutxtgghgqhmsacqh',
      password: 'Comedouro123456@',
      database: 'postgres',
      entities: [Pet, Alarme, Alimentacao, Comedouro, Dashboard, Pedido],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Pet, Alarme, Alimentacao, Comedouro, Dashboard, Pedido]),
    PetModule,
    AlarmeModule,
    AlimentacaoModule,
    ComedouroModule,
    DashboardModule,
    PedidoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
