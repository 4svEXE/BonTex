import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity()
export class OrderEntity {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  customerId: ObjectId;

  @Column()
  orderDate: Date;

  @Column()
  status: string;

  @Column()
  totalAmount: number;

  constructor(partial: Partial<OrderEntity>) {
    Object.assign(this, partial);
    this.updateTimestamps();
  }

  updateTimestamps() {
    const now = new Date();
    if (!this.orderDate) {
      this.orderDate = now;
    }
  }
}
