import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('USER')
export class User {
  @PrimaryGeneratedColumn({ name: 'UID' })
  uid: number;

  @Column({ type: 'varchar', name: 'USERNAME', length: 20, nullable: false })
  username: string;

  @Column({ default: true })
  isActive: boolean;
}
