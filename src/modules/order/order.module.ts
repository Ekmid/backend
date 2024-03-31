import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Order } from 'src/models/order.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Order])],
  providers: [OrderService],
  controllers: [OrderController]
})
export class OrderModule {}
