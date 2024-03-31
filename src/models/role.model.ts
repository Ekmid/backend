import { Column, ForeignKey, Model, Table, BelongsTo } from "sequelize-typescript";
import { User } from "./user.model";

@Table
export class Role extends Model {
    @Column
    roleName: string;
}