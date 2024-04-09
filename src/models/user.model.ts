import { Column, Model, Table, ForeignKey, HasOne } from "sequelize-typescript";
import { Cart } from "./cart.model";

@Table
export class User extends Model {
    @Column
    firstName: string;

    @Column
    username: string;

    @Column
    email: string;

    @Column
    password: string;

    @Column
    role: string;

    @ForeignKey(() => Cart)
    @Column
    cartId: number;

    @HasOne(() => Cart)
    cart: Cart;
}
