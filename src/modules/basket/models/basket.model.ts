import { Column, Model, Table, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Product } from "src/modules/product/models/products.model";
import { User } from "src/modules/users/models/user.model";

@Table
export class Basket extends Model {

    @ForeignKey(() => User)
    @Column
    userId: number

    @ForeignKey(() => Product)
    @Column
    productId: number

    @BelongsTo(() => User)
    user: User;

    @BelongsTo(() => Product)
    product: Product;

    @Column
    quantity: number

    @Column
    cost: number
}