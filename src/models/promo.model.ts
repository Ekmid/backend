import { Column, ForeignKey, Model, Table, BelongsTo } from "sequelize-typescript";
import { Product } from "./products.model";

@Table
export class Promo extends Model {
    @Column
    promoName: string;

    @Column
    discountPercentage: string;

    @ForeignKey(() => Product)
    @Column
    productId: number;

    @BelongsTo(() => Product)
    product: Product;
}
