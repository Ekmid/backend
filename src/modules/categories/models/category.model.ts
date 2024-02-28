import { Column, Model, Table, HasMany } from "sequelize-typescript";
import { Product } from "src/modules/product/models/products.model";

@Table
export class Category extends Model {

    @Column
    categoryName: string

    @HasMany(() => Product)
    products: Product[];
}
