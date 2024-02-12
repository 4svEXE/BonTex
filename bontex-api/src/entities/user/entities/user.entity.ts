import { IsOptional } from 'class-validator';
import { Role } from 'src/enums/roles.enum';
import { BeforeUpdate, Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity({ name: 'User' })
export class UserEntity {

  // constructor(user: Partial<UserEntity>){
  //   Object.assign(this, user);
  // }

  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  username: string;

  @Column({unique: true})
  email: string;
  
  @Column()
  password: string;

  @Column()
  @IsOptional()
  phone: string;

  @Column()
  @IsOptional()
  shippingAddress: string;

  @Column()
  roles: Role[]

  @Column({default: new Date()})
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column({ type: 'timestamp', default: () => Date.now(), transformer: {
    from: value => value,
    to: value => value,
  }})
  updateTimestamps() {
    this.updatedAt = new Date();
  }
}