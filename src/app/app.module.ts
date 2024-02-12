import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../user/user.module';
import { ConfigModule } from '@nestjs/config';
import configurations from 'src/configurations';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [configurations]
  }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (ConfigService: ConfigService) => ({
        dialect: "postgres",
        host: configService.get('db_host'),
        port: configService.get('db_port'),
        password: configService.get('db_password'),
        username: configService.get('db_username'),
        database: configService.get('db_database'),
        synchronize: true,
        autoLoadModels: true,
        models: []
      })
    })
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
