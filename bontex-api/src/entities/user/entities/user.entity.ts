import { Roles } from 'src/enums/roles.enum';
import { BeforeUpdate, Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity({ name: 'User' })
export class UserEntity {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  username: string;

  @Column()
  email: string;
  
  @Column()
  password: string;

  @Column()
  roles: Roles[]

  @Column({default: Date.now()})
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @BeforeUpdate()
  updateTimestamps() {
    this.updatedAt = new Date();
  }
}