/**
 * 組織/公司模型
 */
import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';

// 避免直接導入 User 類型，使用接口代替
interface UserRef {
  userId: string;
}

@Entity('organization')
export class Organization {
  @PrimaryGeneratedColumn('uuid', { name: 'organizationId' })
  organizationId: string;

  @Column({ name: 'userId', nullable: false })
  userId: string;

  @ManyToOne('User', 'organizations', { nullable: false, onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'userId' })
  user: UserRef;

  @Column({ length: 100, nullable: false, unique: true })
  orgName: string;

  @Column({ length: 100, nullable: false })
  orgAddress: string;

  @Column({ length: 100, nullable: true })
  orgMail: string;

  @Column({ length: 1000, nullable: true })
  orgContact: string;

  @Column({ length: 200, nullable: true })
  orgMobile: string;

  @Column({ length: 200, nullable: true })
  orgPhone: string;

  @Column({ length: 200, nullable: true })
  orgWebsite: string;

  @CreateDateColumn()
  createdAt: Date;
} 