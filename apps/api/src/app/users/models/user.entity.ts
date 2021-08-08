import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { hash } from 'bcrypt';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true
  })
  username: string;

  @Column({
    type: 'varchar',
    nullable: false
  })
  password: string;

  @Column({
    type: 'varchar',
    nullable: false
  })
  email: string;

  @Column({
    type: 'varchar',
    nullable: false
  })
  firstName: string;

  @Column({
    type: 'varchar',
    nullable: false
  })
  lastName: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }
}

