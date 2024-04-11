import { IsOptional } from 'class-validator';
import { Role } from 'src/enums/roles.enum';
import { BeforeUpdate, Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity({ name: 'Products' })
export class ProductEntity {

  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  productname: string;

  @Column({unique: true})
  email: string;
  
  @Column()
  password: string;

  @Column({ default: '' })
  phone: string;

  @Column({ default: '' })
  shippingAddress: string;

  @Column({ default: [Role.User] })
  roles: Role[]

  @Column({ default: () => new Date() })
  createdAt: Date;

  @Column({ default: () => new Date() })
  updatedAt: Date;

  @Column({ type: 'timestamp', default: () => Date.now(), transformer: {
    from: value => value,
    to: value => value,
  }})
  updateTimestamps() {
    this.updatedAt = new Date();
  }

  constructor(product: Partial<ProductEntity>){
    Object.assign(this, product);
    this.createdAt = this.createdAt || new Date();
    this.updatedAt = this.updatedAt || new Date();
    this.roles = this.roles || [Role.User];
    this.phone = this.phone || '';
    this.shippingAddress = this.shippingAddress || '';
  }
}