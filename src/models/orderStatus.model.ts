// OrderStatus.model.ts
import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Order } from './order.model';

@Table
export class OrderStatus extends Model<OrderStatus> {

  @Column
  statusName: string;

  @HasMany(() => Order)
  orders: Order[];
}
