import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../users/users.module';;
import { ConfigModule, ConfigService } from '@nestjs/config';
import configurations from 'src/configurations';
import { SequelizeModule} from '@nestjs/sequelize';
import { User } from 'src/modules/users/models/user.model';
import { AuthModule } from '../auth/auth.module';
import { TokenModule } from '../token/token.module';
import { CartModule } from '../cart/cart.module';
import { ProductModule } from '../product/product.module';
import { Product } from 'src/modules/product/models/products.model';
import { Cart } from '../cart/models/cart.model';
import { Categories } from '../product/models/categories.model';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [configurations]
  }),
  SequelizeModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      dialect: "postgres",
      host: configService.get('db_host'),
      port: configService.get('db_port'),
      username: configService.get('db_user'),
      password: configService.get('db_password'),
      database: configService.get('db_name'),
      synchronize: true,
      autoLoadModels: true,
      models: [User, Categories, Product, Cart]
    }),
  }),
    UsersModule,
    AuthModule,
    TokenModule,
    CartModule,
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
