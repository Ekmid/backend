// OrderItem.model.ts
import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Order } from './order.model';
import { Product } from './products.model';

@Table
export class OrderItem extends Model<OrderItem> {

    @ForeignKey(() => Order)
    @Column
    orderId: number;

    @BelongsTo(() => Order)
    order: Order;

    @ForeignKey(() => Product)
    @Column
    productId: number;

    @BelongsTo(() => Product)
    product: Product;

    @Column
    quantity: number;
}
