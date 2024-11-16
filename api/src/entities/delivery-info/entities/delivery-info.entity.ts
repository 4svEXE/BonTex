import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity()
export class DeliveryInfoEntity {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  recipientName: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  postalCode: string;

  @Column()
  phoneNumber: string;

  @Column({ nullable: true })
  email?: string;

  @Column({ type: 'date', nullable: true })
  deliveryDate?: Date;

  @Column()
  orderId: ObjectId;

  constructor(partial: Partial<DeliveryInfoEntity>) {
    Object.assign(this, partial);
  }
}
