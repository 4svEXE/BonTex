import {
  BeforeUpdate,
  Column,
  Entity,
  ObjectId,
  ObjectIdColumn,
} from "typeorm";

@Entity({ name: "Products" })
export class ProductEntity {
  @ObjectIdColumn()
  id: ObjectId; // Ідентифікатор продукту

  @Column()
  name: string; // Назва продукту

  @Column({ nullable: true })
  group?: string; // Група продуктів (необов'язково) hit, new, promotion, recomendation

  @Column({ nullable: true })
  oldPrice?: number; // Стара ціна (необов'язково)

  @Column()
  currentPrice: number; // Поточна ціна

  @Column()
  category: string; // Категорія продукту

  @Column({ nullable: true })
  isDiscount?: boolean; // Чи є знижка на продукт (необов'язково)

  @Column()
  manufacturer: string; // Виробник продукту

  @Column()
  unit_price: number; // Ціна за одиницю товару

  @Column()
  description: string; // Опис продукту

  @Column()
  isAvailable: boolean; // Чи доступний продукт для покупки

  @Column()
  quantity_in_stock: number; // Кількість одиниць товару в наявності

  @Column()
  popularity_rating: number; // Рейтинг популярності продукту

  @Column("simple-array")
  features: string[]; // Особливості продукту (масив рядків)

  @Column("simple-array")
  product_image_url: string[]; // URL-адреси зображень продукту (масив рядків)

  @Column("jsonb")
  sizes: { size: string; quantity_in_stock: number }[]; // Розміри продукту (масив об'єктів)

  // Додаткові властивості для килимів (необов'язково)
  @Column({ nullable: true })
  rug_type?: string;

  @Column({ nullable: true })
  rug_material?: string;

  @Column("simple-array", { nullable: true })
  rug_color?: string[];

  @Column({ nullable: true })
  rug_shape?: string;

  @Column({ nullable: true })
  rug_country_of_origin?: string;

  @Column({ nullable: true })
  rug_pile_height?: number;

  @Column({ nullable: true })
  rug_backing_material?: string;

  @Column({ nullable: true })
  rug_height?: number;

  @Column({ nullable: true })
  rug_sku?: string | number;

  @Column({ nullable: true })
  rug_discounted_price?: number;

  @Column({ default: () => new Date() })
  createdAt: Date; // Дата створення запису

  @Column({ default: () => new Date() })
  updatedAt: Date; // Дата оновлення запису

  @BeforeUpdate()
  updateTimestamps() {
    this.updatedAt = new Date(); // Оновити дату оновлення перед збереженням
  }

  constructor(product: Partial<ProductEntity>) {
    // Конструктор для ініціалізації об'єкта продукту з частковими даними
    Object.assign(this, product);
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
    this.product_image_url = this.product_image_url || [];
    this.sizes = this.sizes || [];
  }
}
