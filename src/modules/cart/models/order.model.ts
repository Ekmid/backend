import { Column, Model, Table, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "src/models/user.model";

@Table
export class Order extends Model {

    @Column
    orderNumber: string;

    @Column
    totalPrice: number;

    @ForeignKey(() => User)
    @Column
    userId: number;

    @BelongsTo(() => User)
    user: User;
}