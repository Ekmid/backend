import { Column, Model, Table, ForeignKey, BelongsTo, HasOne } from "sequelize-typescript";
import { Role } from "./role.model";
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

    @ForeignKey(() => Role)
    @Column
    roleId: number;

    @BelongsTo(() => Role)
    Role: Role;

    @ForeignKey(() => Cart)
    @Column
    cartId: number;

    @HasOne(() => Cart)
    cart: Cart;
}
