import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from '../../models/order.model';
import { CreateOrderDTO } from '../../dto/create-order-dto';

@Injectable()
export class OrderService {
    constructor(@InjectModel(Order) private readonly orderRepository: typeof Order) { }

    // async createOrder(dto: CreateOrderDTO): Promise<Order> {
    //     return this.orderRepository.create(dto);
    // }

    async findAllOrders(): Promise<Order[]> {
        return this.orderRepository.findAll();
    }

    async findOrderByUserId(userId: number): Promise<Order[]> {
        return this.orderRepository.findAll({ where: { userId } });
    }
}
