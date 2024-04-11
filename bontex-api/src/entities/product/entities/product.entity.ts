import { BeforeUpdate, Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity({ name: 'Products' })
export class ProductEntity {

  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column({ nullable: true })
  group?: string;

  @Column({ nullable: true })
  oldPrice?: number;

  @Column()
  currentPrice: number;

  @Column()
  category: string;

  @Column({ nullable: true })
  isDiscount?: boolean;

  @Column()
  manufacturer: string;

  @Column()
  unit_price: number;

  @Column()
  description: string;

  @Column()
  isAvailable: boolean;

  @Column()
  quantity_in_stock: number;

  @Column()
  popularity_rating: number;

  @Column('simple-array')
  features: string[];

  @Column('simple-array')
  product_image_url: string[];

  @Column('jsonb')
  sizes: { size: string; quantity_in_stock: number }[];

  @Column({ nullable: true })
  rug_type?: string;

  @Column({ nullable: true })
  rug_material?: string;

  @Column('simple-array', { nullable: true })
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
  createdAt: Date;

  @Column({ default: () => new Date() })
  updatedAt: Date;

  @BeforeUpdate()
  updateTimestamps() {
    this.updatedAt = new Date();
  }

  constructor(product: Partial<ProductEntity>){
    Object.assign(this, product);
    this.createdAt = this.createdAt || new Date();
    this.updatedAt = this.updatedAt || new Date();
    this.group = this.group || '';
    this.oldPrice = this.oldPrice || 0;
    this.isDiscount = this.isDiscount || false;
    this.rug_type = this.rug_type || '';
    this.rug_material = this.rug_material || '';
    this.rug_color = this.rug_color || [];
    this.rug_shape = this.rug_shape || '';
    this.rug_country_of_origin = this.rug_country_of_origin || '';
    this.rug_pile_height = this.rug_pile_height || 0;
    this.rug_backing_material = this.rug_backing_material || '';
    this.rug_height = this.rug_height || 0;
    this.rug_sku = this.rug_sku || '';
    this.rug_discounted_price = this.rug_discounted_price || 0;
    this.features = this.features || [];
    this.product_image_url = this.product_image_url || [];
    this.sizes = this.sizes || [];
  }
}
