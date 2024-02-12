import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../user/user.module';
import { ConfigModule } from '@nestjs/config';
import configurations from 'src/configurations';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [configurations]
  }), 
  UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
