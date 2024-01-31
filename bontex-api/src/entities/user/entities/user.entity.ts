import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

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
}