import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteController } from './controllers/cliente/cliente.controller';
import { ClienteService } from './services/cliente/cliente.service';
import { Cliente } from './models/cliente.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'pet_online',
      entities: [__dirname + "/models/*.entity.{ts,js}"],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Cliente])
  ],
  controllers: [AppController, ClienteController],
  providers: [AppService, ClienteService],
})
export class AppModule {}
