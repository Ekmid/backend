import { Column, Model, Table, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Category } from "src/modules/categories/models/category.model";

@Table
export class Product extends Model {

    @Column
    productName: string;

    @Column
    productPhoto: string;

    @Column
    loadCapacity: number;

    @Column
    liftingHeight: number;

    @Column
    arrowLength: number;

    @ForeignKey(() => Category)
    @Column
    categoryId: number;

    @BelongsTo(() => Category)
    category: Category;
}