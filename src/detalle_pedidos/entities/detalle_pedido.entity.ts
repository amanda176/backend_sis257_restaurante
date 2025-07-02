import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Pedido } from '../../pedidos/entities/pedido.entity';
import { Platillo } from '../../platillos/entities/platillo.entity';

@Entity('detalle_pedidos')
export class DetallePedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: false })
  cantidad: number;

  @Column('decimal', { precision: 10, scale: 2 })
  precio_unitario: number;

  @Column('decimal', { precision: 10, scale: 2 })
  subtotal: number;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @DeleteDateColumn({ name: 'fecha_eliminacion' })
  fechaEliminacion: Date;

  @Column({ name: 'id_platillo' })
  idPlatillo: number;

  @Column({ name: 'id_pedido' })
  idPedido: number;

  @ManyToOne(() => Platillo, (platillos) => platillos.detalles)
  @JoinColumn({ name: 'id_platillo', referencedColumnName: 'id' })
  platillos: Platillo;

  @ManyToOne(() => Pedido, (pedidos) => pedidos.detalles)
  @JoinColumn({ name: 'id_pedido', referencedColumnName: 'id' })
  pedidos: Pedido;
}
