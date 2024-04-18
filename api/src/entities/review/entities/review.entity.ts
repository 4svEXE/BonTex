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
    // Конструктор для ініціалізації об'єкта продукту з частковими даними
    Object.assign(this, review);
    this.createdAt = this.createdAt || new Date();
    this.updatedAt = this.updatedAt || new Date();
    this.group = this.group || "";
    this.oldPrice = this.oldPrice || 0;
    this.isDiscount = this.isDiscount || false;
    this.rug_type = this.rug_type || "";
    this.rug_material = this.rug_material || "";
    this.rug_color = this.rug_color || [];
    this.rug_shape = this.rug_shape || "";
    this.rug_country_of_origin = this.rug_country_of_origin || "";
    this.rug_pile_height = this.rug_pile_height || 0;
    this.rug_backing_material = this.rug_backing_material || "";
    this.rug_height = this.rug_height || 0;
    this.rug_sku = this.rug_sku || "";
    this.rug_discounted_price = this.rug_discounted_price || 0;
    this.features = this.features || [];
    this.review_image_url = this.review_image_url || [];
    this.sizes = this.sizes || [];
  }
}
