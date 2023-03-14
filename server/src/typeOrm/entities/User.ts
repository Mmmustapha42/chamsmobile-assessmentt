import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'First Name',
    length: 20,
    nullable: false,
  })
  first_name: string;

  @Column({
    name: 'Last Name',
    nullable: false,
  })
  last_name: string;

  @Column({
    name: 'Email',
    nullable: false,
    unique: false,
  })
  email: string;

  @Column({
    name: 'Web Stack',
    nullable: false,
  })
  web_stack: string;
}
