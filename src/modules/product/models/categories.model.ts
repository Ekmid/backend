import { Column, Model, Table } from "sequelize-typescript";

@Table
export class Categories extends Model {

    @Column
    categoryName: string
}