import { Entity, ObjectIdColumn, Column } from "typeorm";
import { ObjectId } from "mongodb";

@Entity()
export class QuickOrderEntity {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  customerName: string;

  @Column()
  customerPhone: string;

  @Column()
  customerEmail: string;

  @Column()
  productId: ObjectId;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  constructor(partial: Partial<QuickOrderEntity>) {
    Object.assign(this, partial);
    this.updateTimestamps();
  }

  updateTimestamps() {
    const now = new Date();
    this.updatedAt = now;
    if (!this.createdAt) {
      this.createdAt = now;
    }
  }
}
