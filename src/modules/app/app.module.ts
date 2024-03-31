import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../users/users.module';;
import { ConfigModule, ConfigService } from '@nestjs/config';
import configurations from 'src/configurations';
import { SequelizeModule} from '@nestjs/sequelize';
import { User } from 'src/models/user.model';
import { AuthModule } from '../auth/auth.module';
import { TokenModule } from '../token/token.module';
import { ProductModule } from '../product/product.module';
import { Product } from 'src/models/products.model';
import { Category } from '../../models/category.model';
import { CategoryModule } from '../categories/category.module';
import { Cart } from '../../models/cart.model';
import { CartModule } from '../cart/cart.module';
import { Order } from '../../models/order.model';
import { OrderItem } from '../../models/orderItem.model';
import { Role } from '../../models/role.model';
import { Promo } from 'src/models/promo.model';
import { OrderStatus } from 'src/models/orderStatus.model';
import { RolesModule } from '../roles/roles.module';
import { OrderModule } from '../order/order.module';

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
      models: [
        User,
        Category,
        Product,
        Cart,
        Order,
        OrderItem,
        Role,
        Promo,
        OrderStatus]
    }),
  }),
    UsersModule,
    AuthModule,
    TokenModule,
    ProductModule,
    CategoryModule,
    CartModule,
    OrderModule,
    RolesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
