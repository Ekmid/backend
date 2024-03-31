// Order.model.ts
import { Table, Column, Model, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { User } from './user.model';
import { OrderStatus } from './orderStatus.model';
import { OrderItem } from './orderItem.model';
import { Cart } from './cart.model'; // Добавим импорт для Cart

@Table
export class Order extends Model<Order> {

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => OrderStatus)
  @Column
  orderStatusId: number;

  @BelongsTo(() => OrderStatus)
  orderStatus: OrderStatus;

  @ForeignKey(() => Cart)
  @Column
  cartId: number;

  @BelongsTo(() => Cart)
  cart: Cart;

  @HasMany(() => OrderItem)
  orderItems: OrderItem[];
}
