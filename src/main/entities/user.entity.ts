import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'email' })
  email: string;
  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'firstname' })
  firstname: string;
  @Column({ name: 'lastname' })
  lastname: string;

  @Column({ name: 'birth_date' })
  birthDate: Date;
  @Column({ name: 'id_no' })
  idNo: string;
  @Column({ name: 'tel_no' })
  telNo: string;
}
