import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Pet } from './entities/pet.entity';
import { PetModule } from './modules/pet/pet.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'aws-0-sa-east-1.pooler.supabase.com',
      port: 6543,
      username: 'postgres.emubutxtgghgqhmsacqh',
      password: 'Comedouro123456@',
      database: 'postgres',
      entities: [Pet],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Pet]),
    PetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
