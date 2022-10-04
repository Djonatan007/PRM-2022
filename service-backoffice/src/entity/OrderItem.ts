import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Product } from "./Product";
import { Order } from "./Order";

@Entity()
export class OrderItem extends BaseEntity {
    @PrimaryGeneratedColumn() 
    id: number;

    @ManyToOne(() => Order, {eager: true, nullable: false})
    order: Order;

    @ManyToOne(() => Product, {eager: true, nullable: false})
    product: Product;

    @Column({nullable: false})
    amount: number;

    @Column('decimal',{nullable: false, precision:10, scale:2})
    value: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}