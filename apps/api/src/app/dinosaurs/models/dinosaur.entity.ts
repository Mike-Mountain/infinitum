import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('dinosaur')
export class DinosaurEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  pronunciation: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
  })
  meaning: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  lived: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  location: string;

  @Column({
    type: 'varchar',
    length: 2000,
    nullable: false,
  })
  summary: string;

  @Column({
    type: 'varchar',
    length: 2000,
    nullable: false,
  })
  description: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  image: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
  })
  wikiImageOne: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
  })
  wikiImageTwo: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
  })
  dinoImageOne: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
  })
  dinoImageOneSrc: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
  })
  sizeComparisonDino: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
  })
  sizeComparisonHuman: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  diet: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  type: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
  })
  taxonomy: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: false,
  })
  fossils: string;

}
