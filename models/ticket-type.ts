/**
 * 票種模型
 */
import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany
} from 'typeorm';
import { Concert } from './concert.js';
import { Order } from './order.js';
import { Ticket } from './ticket.js';

@Entity('ticketType')
export class TicketType {
  @PrimaryGeneratedColumn('uuid', { name: 'ticketTypeId' })
  ticketTypeId: string;

  @Column({ name: 'concertId', nullable: false })
  concertId: string;

  @ManyToOne(() => Concert, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'concertId' })
  concert: Concert;

  @Column({ length: 50, nullable: false })
  ticketTypeName: string;

  @Column({ length: 50, nullable: true })
  entranceType: string;

  @Column({ type: 'text', nullable: true })
  ticketBenefits: string;

  @Column({ type: 'text', nullable: true })
  ticketRefundPolicy: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  ticketTypePrice: number;

  @Column({ nullable: false })
  totalQuantity: number;

  @Column({ nullable: false })
  remainingQuantity: number;

  @Column({ type: 'timestamp', nullable: true })
  sellBeginDate: Date;

  @Column({ type: 'timestamp', nullable: true })
  sellEndDate: Date;

  @CreateDateColumn({ nullable: false })
  createdAt: Date;
  
  @OneToMany(() => Order, order => order.ticketType)
  orders: Order[];
  
  @OneToMany(() => Ticket, ticket => ticket.ticketType)
  tickets: Ticket[];
} 