import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity()
export class OrderItemEntity {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  orderId: ObjectId;

  @Column()
  variantId: ObjectId;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @Column()
  details?: string;

  constructor(partial: Partial<OrderItemEntity>) {
    Object.assign(this, partial);
  }
}
