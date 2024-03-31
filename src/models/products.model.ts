import { Column, Model, Table, ForeignKey, BelongsTo } from "sequelize-typescript";
import { OrderItem } from "./orderItem.model";
import { Category } from "./category.model";

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

    @ForeignKey(() => Category) // Добавим ForeignKey для связи с категорией продукта
    @Column
    categoryId: number;

    @BelongsTo(() => Category)
    category: Category;

    @ForeignKey(() => OrderItem)
    @Column
    orderItemId: number;

    @BelongsTo(() => OrderItem)
    orderItem: OrderItem;
}
