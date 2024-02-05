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