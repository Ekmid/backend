import { Column, Model, Table, BelongsTo, ForeignKey } from "sequelize-typescript";
import { User } from "./user.model";

@Table
export class Cart extends Model {
    @ForeignKey(() => User)
    @Column
    userId: number;

    @BelongsTo(() => User)
    user: User;
}