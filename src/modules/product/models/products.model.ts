import { Column, Model, Table } from "sequelize-typescript";
import { Col } from "sequelize/types/utils";

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
}