import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Cliente } from '../../clientes/entities/cliente.entity';
import { Direccion } from '../../direcciones/entities/direccion.entity';
import { DetallePedido } from 'src/detalle_pedidos/entities/detalle_pedido.entity';

@Entity('pedidos')
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal', { precision: 10, scale: 2 })
  total: number;

  @Column({ name: 'fecha_Edad' })
  fecha: Date;

  @Column({ default: 'pendiente' })
  estado: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @DeleteDateColumn({ name: 'fecha_eliminacion' })
  fechaEliminacion: Date;

  @Column({ name: 'id_cliente' })
  idCliente: number;

  @Column({ name: 'id_direccion' })
  idDireccion: number;

  @OneToMany(() => DetallePedido, (detalles) => detalles.pedidos)
  detalles: DetallePedido[];

  @ManyToOne(() => Direccion, (direcciones) => direcciones.pedidos)
  @JoinColumn({ name: 'id_direccion', referencedColumnName: 'id' })
  direcciones: Direccion;

  @ManyToOne(() => Cliente, (clientes) => clientes.pedidos)
  @JoinColumn({ name: 'id_cliente', referencedColumnName: 'id' })
  clientes: Cliente;
}
