import {
  BeforeUpdate,
  Column,
  Entity,
  ObjectId,
  ObjectIdColumn,
} from "typeorm";

@Entity({ name: "Reviews" })
export class ReviewEntity {
  @ObjectIdColumn()
  id: ObjectId; // Ідентифікатор продукту

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  userId: string;

  @Column()
  productId: string;

  @Column()
  review: string;

  @Column()
  rating: number;

  @Column({ default: () => new Date() })
  createdAt: Date; // Дата створення запису

  @Column({ default: () => new Date() })
  updatedAt: Date; // Дата оновлення запису

  @BeforeUpdate()
  updateTimestamps() {
    this.updatedAt = new Date(); // Оновити дату оновлення перед збереженням
  }

  constructor(review: Partial<ReviewEntity>) {
    Object.assign(this, review);
    this.createdAt = this.createdAt || new Date();
    this.updatedAt = this.updatedAt || new Date();
    this.id = this.id || null;
    this.username = this.username || "";
    this.email = this.email || "";
    this.userId = this.userId || "";
    this.productId = this.productId || "";
    this.review = this.review || "";
    this.rating = this.rating || 0;
  }
}
